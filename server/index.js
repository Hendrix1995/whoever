require('dotenv').config();
const express = require('express');
const session = require('express-session');

const cors = require('cors');
const controllers = require('./controllers');
const cookieParser = require('cookie-parser'); // TODO: 언젠가 이걸 지울지 몰라.
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});

const app = express();
const PORT = 4000;

app.use(
  session({
    secret: 'codegangster@',
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'None',
      httpOnly: true,
      secure: true
    }
  })
);

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// users 요청
app.post('/login', controllers.login.post);
app.post('/logout', controllers.logout.post);
app.post('/signup', controllers.signup.post);
app.get('/userinfo', controllers.userInfo.get);

// posts 요청
app.get('/main', controllers.getMainPosts.get);
app.post('/listpage', controllers.getListPagePosts.post);
app.post('/myposts', controllers.getMyPosts.post);
app.post('/onepost', controllers.getOnePost.post);
app.get('/searchpage', controllers.getSearchPosts.get);
app.put('/changepost', controllers.changepost.update);
app.delete('/deletepost', controllers.deletepost.delete);
app.post('/uploadpost', controllers.uploadpost.post);
app.put('/suggestionsup', controllers.suggestionUp.update);
app.put('/suggestionsdown', controllers.suggestionDown.update);
app.post('/profile', upload.single('image'), controllers.uploadProfile.post);

// comments 요청
app.post('/getcomments', controllers.getComments.post);
// app.update('/changecomment', controllers.changecomment);
// app.delete('/deletecomment', controllers.deletecomment);
// app.post('/uploadcomment', controllers.uploadcomment);

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
