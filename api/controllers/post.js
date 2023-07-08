const { db } = require('../db');


const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts"

    db.query(q, [req.query.cat], (err, results) => {
        if(err) return res.json(err);

        return res.status(200).json(results)
    })
}

const getPost = (req, res) => {
    res.json('from controllers post!')
}

const addPost = (req, res) => {
    res.json('from controllers post!')
}

const deletePost = (req, res) => {
    res.json('from controllers post!')
}

const updatePost = (req, res) => {
    res.json('from controllers post!')
}

module.exports = { getPosts, getPost, addPost, deletePost, updatePost };