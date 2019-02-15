var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = {Todo};
