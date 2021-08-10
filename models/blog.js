const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = Schema({
    title:{
        type:String,
        required:true,
    },
    snippet:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
},{timestamp:true,collection:'blog'},);

const Blog = mongoose.model('blog',blogSchema);

module.exports =Blog;