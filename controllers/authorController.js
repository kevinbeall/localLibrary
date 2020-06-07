const Author = require('../models/author');

// display list of all authors
exports.author_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Author list');
}

// display detail page for a specific author
exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
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