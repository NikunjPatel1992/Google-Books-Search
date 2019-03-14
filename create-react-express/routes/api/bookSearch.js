const router = require("express").Router();

const axios = require("axios");

// Matches with "/api/books"
router.route("/", (req,res) =>{
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});  
// https://www.googleapis.com/books/v1/volumes?q=${bookTitle}

module.exports = router;
