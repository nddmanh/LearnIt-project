const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

const {getAllPosts, createOnePost, updateOnePost, deleteOnePost} = require('../controllers/postController');

router.get('/', verifyToken, getAllPosts);

router.post('/', verifyToken, createOnePost);

router.put('/:id', verifyToken, updateOnePost);

router.delete('/:id', verifyToken, deleteOnePost);

module.exports = router