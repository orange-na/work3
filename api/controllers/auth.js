const { db } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const register = (req, res) => {
    // Check existng users
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?'
    db.query(q,[req.body.email, req.body.username], (err, results) => {
        if(err) return res.json(err);
        if(results.length) return res.status(409).json('User already exists!!');

        // Hash the password and create a user
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            const q = 'INSERT INTO users (`username`, `email`, `password`) VALUES (?)'
            const values = [req.body.username, req.body.email, hash];

            db.query(q, [values], (err, results) => {
                if(err) return res.json(err);
                return res.status(200).json('User has been created!!');
            })
        })
    })
}

const login = (req, res) => {


    const q = 'SELECT * FROM users WHERE username = ?';
db.query(q, [req.body.username], (err, results) => {
    if (err) return res.json(err);
    if (results.length === 0) return res.status(404).json('User not found!!');

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        results[0].password
    );

    if (!isPasswordCorrect) return res.status(404).json('Wrong password or username');

    const token = jwt.sign( {id:results[0].id} , "jwtkey");
    const { password, ...other } = results[0];

    return res
        .cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .send(other);
});


    // // check user
    // const q = 'SELECT * FROM users WHERE username = ?';
    // db.query(q, [req.body.username], (err, results) => {
    //     if(err) return res.json(err);
    //     if(results.length === 0) return res.json('User not found!!');
    //     res.json('successfully');




    // //Check password
    // const isPasswordCorrect = bcrypt.compareSync(
    //     req.body.password,
    //     results[0].password
    // );

    // if(!isPasswordCorrect) return res.status(400).json('wrong password or username')

    // const token = jwt.sign({ id: results[0].id }, "jwtkey");
    // const { password, ...other } = results[0];

    // res
    //   .cookie("access_token", token, {
    //     httpOnly: true,
    //   })
    //   .status(200)
    //   .json(other);



    // // // check password
    // // const plain = req.body.password;
    // // const hash = results[0].password;

    // // bcrypt.compare(plain, hash, (err,isEqual) => {
    // //     if(isEqual){
    // //         const token = jwt.sign({id:results[0].id}, "secretkey");
    // //         const { password, ...other} = results[0];
    // //         res.cookie("access-token", token, {
    // //             httpOnly: true
    // //         }).status(200).json(other);
    // //     }else{
    // //         return res.status(400).json("Wrong username or password!")
    // //     }
    // // })
    
    // })

}

const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: 'none',
        secure: true,
        path: '/',
        domain: 'localhost'
    }).status(200).json('User has been logged out!!')
}

module.exports = { register, login, logout };