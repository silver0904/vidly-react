import React from 'react'

class MovieContainer extends React.Component{
    constructor(props){
        super (props)
    }

    render (){
        const movie = this.props.movie
        return(
            <div >
                <h4>{movie.title}</h4>
                <p>{movie.genre.name}</p>
            </div>
            
        )
    }
}
export default MovieContainer;