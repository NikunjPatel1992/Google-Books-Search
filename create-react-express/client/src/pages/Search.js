import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn, A } from "../components/Form";
import Card from "../components/Card";
import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail";

class BookSearch extends Component {

    state = {
        books: [],
        bookSearch: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        API.getBookSearch(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    handleSaveSubmit = id => {        
        const book = this.state.books.find(book => book.id === id)

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })

        // Filter this.state.friends for friends with an id not equal to the id being removed
        const books = this.state.books.filter(book => book.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ books });

    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>(React) Google Books Search</h1>
                            <h2>Search for and Save Books of Interest</h2>
                        </Jumbotron>
                        <Container>
                            <Row>
                                <Col size="md-12">
                                    <Card
                                        cardName="Book Search"
                                    >
                                        <form>
                                            <Row>
                                                <Col size="xs-9 sm-10">
                                                    <Input
                                                        name="bookSearch"
                                                        value={this.state.bookSearch}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Search For a Book"
                                                    />
                                                </Col>
                                                <Col size="xs-3 sm-2">
                                                    <FormBtn
                                                        onClick={this.handleFormSubmit}
                                                        type="success"
                                                    // className="input-lg"
                                                    >
                                                        Search
                                            </FormBtn>
                                                </Col>
                                            </Row>
                                        </form>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12">
                                    {!this.state.books.length ? (
                                        <Card
                                            cardName="No Book to Display"
                                        ></Card>
                                    ) : (
                                            <Card
                                                cardName="Result"

                                            >
                                                <List>
                                                    {this.state.books.map(book => {
                                                        return (
                                                            <ListItem
                                                                key={book.id}
                                                            >
                                                                <Container>
                                                                    <Row>
                                                                        <Col size="xs-8 sm-9">
                                                                            <h3>{book.volumeInfo.title}</h3>
                                                                            <h4>Written By {book.volumeInfo.authors}</h4>
                                                                        </Col>
                                                                        <Col size="xs-2">
                                                                            <A
                                                                                href={book.volumeInfo.infoLink}>
                                                                                View
                                                                                </A>
                                                                        </Col>
                                                                        <Col size="xs-2">
                                                                            <Button
                                                                                onClick={() => this.handleSaveSubmit(book.id)}
                                                                                type="success"

                                                                            >
                                                                                Saved
                                                                            </Button>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col size="xs-4 sm-2">
                                                                            <Thumbnail src={book.volumeInfo.imageLinks.thumbnail} />
                                                                        </Col>
                                                                        <Col size="xs-8 sm-9">
                                                                            <p>{book.volumeInfo.description}</p>
                                                                        </Col>
                                                                    </Row>
                                                                </Container>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </List>
                                            </Card>
                                        )}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BookSearch;