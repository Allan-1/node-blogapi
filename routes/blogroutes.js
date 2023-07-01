const router = require('express').Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
} = require('../controllers/blogcontroller');

router.post('/blog/create', createBlog);

router.get('/blogs', getAllBlogs);

router.get('/blogs/:blogId', getBlogById);

module.exports = router;
