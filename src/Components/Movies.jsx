import React from "react";
import Movie from "./Movie.jsx"
export default function Movies({movies = []}) {
    console.log(movies.length)
    return(
        <div className="container__cards">
        { movies.length 
        ? <>
            {movies.map((el) =>{
              return  <Movie key={el.imdbID} {...el}   />
            })}
          </>
        : <h4>Not Found</h4> }
        </div>
    )
}