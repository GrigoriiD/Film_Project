import React from "react";

export default function Card ({Title: title,Year: year,imdbID: id,Type: type,Poster:poster}) {
    return(
        <div id={id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={poster}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <span>{year}</span>
                <span className="right">{type}</span>
            </div>
        </div>
               
    )
}