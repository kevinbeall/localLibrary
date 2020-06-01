var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: { type: String, required: true, max: 100 },
    family_name: { type: String, required: true, max: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
  }
);

//Virtual for author's full name
AuthorSchema.virtual('name').get(() => {
  var fullname = '';
  if (this.first_name && this.family_name) {
    fullname = `${family_name}, ${first_name}`;
  }
  if (!this.first_name || !this.family_name) {
    fullname = '';
  }
  return fullname;
});

AuthorSchema.virtual('url').get(() => {
  return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model('Author', AuthorSchema);