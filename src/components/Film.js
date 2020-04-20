import React, {Component} from 'react';

class Film extends Component {
    render(){
        return (
            <li className='film'>
                <h3>{this.props.children}</h3>
            </li>
        )
    }
}
export default Film;