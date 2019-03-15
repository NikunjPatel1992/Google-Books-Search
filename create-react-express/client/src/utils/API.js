import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/savedBooks");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/savedBooks/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/savedBooks/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/savedBooks", bookData);
  },
  getBookSearch: function(query) {
    return axios.get("/api/bookSearch", { params: { q: query } });
  }  
};
