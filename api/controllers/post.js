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
    const q = "SELECT p.id, u.username, p.title, p.desc, p.img, u.img AS userImg, p.cat, p.date FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?"
    db.query(q, [req.params.id], (err, results) => {
        if(err) return res.json(err);

        return res.status(200).json(results)[0];
    })
}

const addPost = (req, res) => {
    const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
        req.body.date,
        req.body.uid
    ];

    db.query(q, [values], (err, results) => {
        if(err) return res.status(500).json(err);
        return res.json("Post has been posted!!")
    })
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
    const postId = req.params.id;
    const q = "UPDATE posts SET `title`= ?, `desc`= ?, `img`= ?, `cat`= ? WHERE `id` = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
    ];

    db.query(q, [...values, postId], (err, results) => {
        if(err) return res.status(500).json(err);
        return res.json("Post has been updated!!")
    })
}

module.exports = { getPosts, getPost, addPost, deletePost, updatePost };