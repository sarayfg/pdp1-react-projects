import React, {Component} from 'react';

class Search extends Component {

    render() {
        return (
            <div>
                <input placeholder="search an artist" onChange={this.props.getUserSearch} value={this.props.userInput} onKeyPress={this.props.handleKeyPress}/>
                <button>Search</button>
            </div>
            
        );
    }

}

export default Search;