import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import SavedBook from "../components/SavedBook";

function Saved() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        loadSaved();
    }, []);

    function loadSaved() {
        API.getBooks().then(res => {
            setBooks(res.data)
            console.log(res.data);
        }).catch(err => console.log(err));
    };
    function deleteBook(id) {
        // add code here to remove a book using API
        API.deleteBook(id).then(result => {
            loadSaved();
        })
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>Your Saved Books:</h1>
                    {books.length ? (
                        <List>
                            {books.map(book => {
                                return (
                                    <ListItem key={book._id}>
                                        <SavedBook img={book.image} title={book.title} authors={book.authors} bookLink={book.link} description={book.description}/>
                                        <DeleteBtn onClick={() => deleteBook(book._id)} />
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
    )

}


export default Saved;