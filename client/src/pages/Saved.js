import React, {useEffect, useState} from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function Saved(){
const [books, setBooks] = useState([]);


useEffect(()=>{
loadSaved();
},[]);

function loadSaved(){
    API.getBooks().then(res=>{
    setBooks(res.data)
    console.log(res.data);
    }).catch(err=>console.log(err));
};

return(
    <List>
    {books.map(book => {
      return (
        <ListItem key={book._id}>
          <a href={"/books/" + book._id}>
            <strong>
              {book.title} by {book.authors.join(" & ")}
            </strong>
          </a>
        </ListItem>
      );
    })}
  </List>

)

}


export default Saved;