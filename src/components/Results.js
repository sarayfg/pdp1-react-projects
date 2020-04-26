import React, {Component} from 'react';

import Item from './Item.js'

class Results extends Component {
    render() {
        const { data } = this.props;
        const { response }  = this.props;
        console.log(data);
        return (
            <ul>
                {response ? 
                    data.map(res => {
                    return <li>
                        <Item data={res} key={data.id}/>
                    </li>
                    }) : 'No hay resultados para su busqueda'

                }
            </ul>
        );
    }

}

export default Results;