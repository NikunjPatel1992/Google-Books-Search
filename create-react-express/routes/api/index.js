const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require("axios");
// const bookSearchRoutes = require("./bookSearch");

// Book routes
router.use("/savedBooks", bookRoutes);

// router.get("/bookSearch", bookSearchRoutes);

router.get("/bookSearch", (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
      .then(({ data: { items } }) => res.json(items))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;
