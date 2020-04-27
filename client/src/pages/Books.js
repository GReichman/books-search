import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SavedBook from "../components/SavedBook";
import { Input, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn";
import GoogleApi from "../utils/GoogleApi";
import API from "../utils/API";
function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // update the initial state to provide values for
  // the controls in the form (use empty strings)
  const [formObject, setFormObject] = useState("")



  function bookSearch(){
    GoogleApi.findBooks(formObject).then(results =>{

      setBooks(results.data.items.map(book=>{
        return{
          title:book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          link:book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks.thumbnail
        }
      }));
    }).catch(err => setBooks([]))
  }

  function handleInputChange({target}) {
    setFormObject(target.value);
    // add code to control the components here
  }

  function handleFormSubmit(event) {
    // add code here to post a new book to the api
    event.preventDefault();
    console.log(formObject);
    bookSearch();
  }

  function storeBook(bookNum){
   const targetBook = books[bookNum];
    console.log(targetBook);
   API.saveBook(targetBook).then(res=>{
     console.log(res);
   }).catch(err => console.log(err))
  }


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <h1>Search for Books:</h1>
          <form>
            <Input
            name="SearchTerm"
            placeholder="Search Term"
            onChange={handleInputChange}
            />
            <FormBtn
            disabled={formObject===""}
            onClick={handleFormSubmit}>
              Search
            </FormBtn>
          </form>
          </Col>


          <Col size="md-6">
              <h1>Results:</h1>
              {books.length ? (
                  <List>
                      {books.map((book,index) => {
                          return (
                              <ListItem key={index}>
                                  <SavedBook img={book.image} title={book.title} authors={book.authors} bookLink={book.link} description={book.description}/>
                                  <SaveBtn onClick={()=> storeBook(index)}/>
                              </ListItem> 
                          );
                      })}
                  </List>
              ) : (
                      <h3>No Results to Display</h3>
                  )}
          </Col>
          </Row>
  </Container>
    );
  }


export default Books;
