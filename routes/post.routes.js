const express = require("express");
const { setPosts } = require("../controllers/post.controllers");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "voici les données" });
});

router.post("/", setPosts);

router.put("/:id", (req,res) => {
    res.json({messageId: req.params.id})
})

router.delete("/:id", (req, res) => {
    res.json({message: "Post supprime id: " + req.params.id})
})

router.patch("/like-post/:id", (req, res) => {
    res.json({message: "Post liké : id : " + req.params.id })
})

router.patch("/dislike-post/:id", (req, res) => {
    res.json({message: "Post disliké : id : " + req.params.id })
})

module.exports = router