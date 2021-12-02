const express = require('express')
const router=express.Router();
const commentController =require('../controllers.js/commentsController')


router.post("/add",commentController.addComment);
router.post('',commentController.getFilmComments);


module.exports =router;