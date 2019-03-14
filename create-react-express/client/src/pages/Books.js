import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail";
import { A } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    link: "",
    description: "",
    image: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", link: "", description: "", image: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>          
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h2>Search for and Save Books of Interest</h2>
            </Jumbotron>
            <Container>
              {this.state.books.length ? (
                <Card
                  cardName="Saved Books"
                >
                  <List >
                    {this.state.books.map(book => {
                      return (
                        <ListItem key={book._id}>
                          <Container>
                            <Row>
                              <Col size="xs-8 sm-9">
                                <h3>{book.title}</h3>
                                <h4>Written By {book.authors}</h4>
                              </Col>
                              <Col size="xs-2">
                                <A
                                  href={book.link}>
                                  View
                              </A>
                              </Col>
                              <Col size="xs-2">
                                <Button
                                  onClick={() => this.deleteBook(book._id)}
                                  type="danger"
                                  className=""
                                >
                                  Delete
                              </Button>
                              </Col>
                            </Row>
                            <Row>
                              <Col size="xs-4 sm-2">
                                <Thumbnail src={book.image} />
                              </Col>
                              <Col size="xs-8 sm-9">
                                <p>{book.description}</p>
                              </Col>
                            </Row>
                          </Container>
                        </ListItem>
                      );
                    })}
                  </List>
                </Card>
              ) : (
                  <Card
                    cardName="No Saved Books to Display"
                  >
                  </Card>
                )}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
