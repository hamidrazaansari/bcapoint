const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create POST
router.post("/", async (req, res) => {
    const newPost = await new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
})



//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log("ye",post)
        if (post.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatePost);

            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("You can update only Your Post , Please Enter Your UserName")
        }


    } catch (error) {
        console.log("err")
        res.status(500).json(error);
    }

});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
      
            try {
                await post.delete()
                res.status(200).json("Post Has been Deleted!");

            } catch (error) {
                res.status(500).json(error);
            }


    } catch (error) {
        res.status(500).json(error);
    }

});

//GET POST
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let posts;
        if(username){
            posts = await Post.find({username})

        } else{
            posts = await Post.find();
        }

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).send(error)
    }
})

//GET POST BY ID
router.get("/:title", async (req, res) => {
    try {
        const post = await Post.find({sub:req.params.title});
        console.log(post)
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send(error)
    }
})

// //GET BLOG POST
// router.get("/blog",async (req,res) => {
    
//     try {

//         let posts = await Post.find();

//         res.status(200).json(posts);
        
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })







module.exports = router