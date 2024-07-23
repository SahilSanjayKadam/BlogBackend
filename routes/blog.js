const express=require("express");
const router=express.Router();

//controller

const {createComment}=require("../controllers/commentController");
const {createPost,getAllPosts}=require("../controllers/postController")
const {likePost,unlikePost}=require("../controllers/likeController");

//Routing
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts/fetchAll",getAllPosts);
router.get("/posts/like",likePost);
router.get("/posts/unLike",unlikePost);






module.exports=router;