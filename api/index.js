const express = require('express');
const cookieParser = require("cookie-parser");
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const cors = require('cors');
const usersRouter = require('./routes/users');
const multer = require('multer');
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



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })

const upload = multer({ storage: storage })

app.post('/api/upload',upload.single('file'), (req, res) => {
  if (req.file) {
    // ファイルがアップロードされた場合の処理
    const file = req.file;
    res.status(200).json(file.filename);
  } else {
    // ファイルがアップロードされなかった場合の処理
    res.status(200).json('No file uploaded');
  }
})


app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);


app.listen(process.env.PORT || 8800, () => {
    console.log('Connected to API!!')
});

app.get('/', (req, res) => {
    res.json('hello world');
})