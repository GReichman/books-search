import React from "react";



function SavedBook(props){
return(
    <div className="media">
        <img src={props.img} className="align-self-center mr-3" alt="book"/>
        <div className="media-body">
            <h5 className="mt-0">{props.title} by: {props.authors.join(" & ")}</h5>
            <a href={props.bookLink}>{props.bookLink}</a>
            <p className="mb-0">{props.description}</p>
        </div>
    </div>
)
}

export default SavedBook;