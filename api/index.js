const express = require('express');
const cookieParser = require("cookie-parser");
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const cors = require('cors');
const usersRouter = require('./routes/users');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);


app.listen(8800, () => {
    console.log('Connected to API!!')
});

app.get('/', (req, res) => {
    res.json('hello world');
})