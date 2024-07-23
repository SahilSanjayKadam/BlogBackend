const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

exports.createComment=async (req,res)=>{
    try{
      const {post,user,body}=req.body;
      const comment=new Comment({
        post,user,body
      });
      //saving the comment into the database
      const savedcomment=await comment.save();
      //find the post by id and add new comment to its comment array
      const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedcomment._id}},{new:true})
                        .populate("comments")
                        .exec();
      res.json({
        post:updatedPost
      })
    }catch(error){
          return res.status(500).json({
            error:"Comment hasn't been created"
          })
    }
}