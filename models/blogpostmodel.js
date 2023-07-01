const mongoose = require('mongoose');
const {Schema} = mongoose

const blogSchema = new Schema({
    title:{type: String, required: true},
    content:{type: String, required: true},
    date:{type: Date, default: Date.now}
})

const BlogSchema = mongoose.model('BlogSchema', blogSchema)

module.exports = BlogSchema