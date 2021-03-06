const Author = require('../models/author');
const async = require('async');
const Book = require('../models/book');

const mongoose = require('mongoose');

// display list of all authors
exports.author_list = (req, res, next) => {

  Author.find()
    .populate('author')
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err) };
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
};

// display detail page for a specific author
exports.author_detail = (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  async.parallel({
    author: function (callback) {
      Author.findById(id)
        .exec(callback)
    },
    authors_books: function (callback) {
      Book.find({ 'author': id }, 'title summary')
        .exec(callback)
    },
  }, function (err, results) {
    if (err) { return next(err) }
    if (results.author == null) {
      let err = new Error('Author not found');
      err.status = 404;
      return next(err)
    }
    //Successful render
    res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.authors_books })
  })
}

// display author create form on GET
exports.author_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create GET');
}

// handle author create POST
exports.author_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create POST');
}

// display author delete form on GET
exports.author_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
}

// handle author delete on POST
exports.author_delete_post = (req, res) => {
  rs.send('NOT IMPLEMENTED: Author delete POST');
}

// display author update form on get
exports.author_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update GET');
}

// handle authro update on POST
exports.author_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update POST');
}