import React, {Component} from 'react';
import api from './api.js';
import Results from './components/Results'
import Search from './components/Search'

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          response: false,
          userInput: '',
          data: []
        };
        this.getResult = this.getResult.bind(this);
        this.getUserSearch = this.getUserSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    getUserSearch(event) {    
    const value = event.currentTarget.value;

    this.setState({
      userInput: value
    });

  
    this.getResult(); 
    
    console.log(this.state.userInput);
    }
    getResult() {
        api.get(this.state.userInput + '&type=artist')
        .then(res => {
            const result = res.data.artists.items;
            if(result.length > 0) {
                this.setState({
                    data: result,
                    response: true
                  });
            } else {
                this.setState({
                    data: result,
                    response: false
                  });
            }
 
          });      

    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.getUserSearch(event);
        }

    }

render() {
    return(
       <div>
           <h1 className="page-title">Music searcher</h1>
           <Search getUserSearch={this.getUserSearch} userInput={this.state.userInput} handleKeyPress={this.handleKeyPress}/>
           <Results data={this.state.data} response={this.state.response}/>
       </div>
    )
}
}

export default App;