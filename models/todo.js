const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      // unique: true,
      // maxlength: 20,
      // minlength: 3,
      // trim: true,
    },
    desc: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Todo', todoSchema)
