const BlogSchema = require('../models/blogpostmodel')

async function createBlog(req, res){
    const {title, content} = req.body;
    const newBlog = new BlogSchema({title: title, content: content})
    newBlog.save().then((blog)=>{
        res.status(201).json({message: 'Blog created successfully', blog: blog});
    }).catch((error)=>{
        console.error(error.message);
    });
}

async function getAllBlogs(req, res){
    BlogSchema.find().then((blogs)=>{
        res.status(200).json({message: 'Blogs fetched successfully', blogs: blogs});
    }).catch((error)=>{
        console.error(error.message);
    });
}

async function getBlogById(req, res){
    const {id} = req.params;
    BlogSchema.findById(id).then((blog)=>{
        res.status(200).json({message: 'Blog fetched successfully', blog: blog});
    }).catch((error)=>{
        console.error(error.message);
    });
}