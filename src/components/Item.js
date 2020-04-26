import React, {Component} from 'react';


class Item extends Component {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
        <div>{data.name}</div>
        );
    }

}

export default Item;