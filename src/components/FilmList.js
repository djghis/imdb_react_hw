import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
    render(){
        const filmNodes = this.props.films.map(film =>{
            return (
                <Film key={film.id} >
                Film title: {film.name}
                <br/>
                <a href={film.url}>click here to see more details about {film.name}</a>
                </Film>
            );
        });

        return (
            <ul className='film-list'>
                {filmNodes}
            </ul>
        )
    }
}
export default FilmList;