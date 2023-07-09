const jwt = require("jsonwebtoken");
const { db } = require('../db');


const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts"

    db.query(q, [req.query.cat], (err, results) => {
        if(err) return res.json(err);

        return res.status(200).json(results)
    })
}

const getPost = (req, res) => {
    const q = "SELECT u.username, p.title, p.desc, p.img, u.img AS userImg, p.cat, p.date FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?"
    db.query(q, [req.params.id], (err, results) => {
        if(err) return res.json(err);

        return res.status(200).json(results)[0];
    })
}

const addPost = (req, res) => {
    res.json('from controllers post!')
}

const deletePost = (req, res) => {
        const q = "DELETE FROM posts WHERE `id` = ?";
        const postId = req.params.id;

        db.query(q, [postId], (err, results) => {
            if(err) return res.status(403).json(err);

            return res.json('Post has been deleted successfully!!')
        })
    
}

const updatePost = (req, res) => {
    res.json('from controllers post!')
}

module.exports = { getPosts, getPost, addPost, deletePost, updatePost };