var express = require('express');
var multer  = require('multer');
var ext = require ('file-extension');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');

  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + '.' + ext(file.originalname))
  }
})
 


var upload = multer({ storage: storage }).single('picture');;




var app = express();



app.set('view engine', 'pug');
app.use(express.static('css'));
app.use(express.static('public'));


//
//function restric (req, res, next){
//  if (req.user) return next;
//  res.redirect('/signup');
//}
app.get('/', function (req, res){
        res.render('index', { title: 'EmilioGram' });
        });

app.get('/signup', function (req, res){
        res.render('index', { title: 'EmilioGram - Signup' });
        });
app.get('/signin', function (req, res){
        res.render('index', { title: 'EmilioGram - Signin' });
        });
app.get ('/api/pictures', function (req, res, next){
         var pictures = [
    {
      user: {
        username: 'emilio',
        avatar: 'avatar.jpg'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
    user: {
        username: 'emilio',
        avatar: 'avatar.jpg'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate()-10)
    }
  ];
   
 res.send(pictures);

});


app.post('/api/pictures', function (req, res){
  upload(req, res, function (err){
    if (err){
      return res.send(500, "Error Subiendo archivo");
    }
    res.send('Foto Subida');
  } )
});
app.get ('api/user/:username', function (req, res){
  const user = {
    username: 'emilio',
    avatar: 'https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/10706867_1700776723536266_1826483189_a.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://hfdktg-sn3302.files.1drv.com/y4mVfYu_G-0Db4a5OPLfF8J5xskdtOmvFG2PE_ecmiLi3cLMeGRN_o7bUyWhjaq1UpXp1byh3go_snIuUvnrxFddQ9vIbsGyZL-NnZIEoZYIV2hU5oIB5KM9XojaxPanxyP_5hTcUfxjzWqcU8ldlac9hQCYCSHNulEGaxvBcdBSVIV72T1VEZZGifzNeWLT3Z_YpwY4Ci7Ub5Y-RxIomSgNA?width=256&height=144&cropmode=none',
        likes: 3
      },
      {
        id: 2,
        src: 'https://hfdktg-sn3302.files.1drv.com/y4mVfYu_G-0Db4a5OPLfF8J5xskdtOmvFG2PE_ecmiLi3cLMeGRN_o7bUyWhjaq1UpXp1byh3go_snIuUvnrxFddQ9vIbsGyZL-NnZIEoZYIV2hU5oIB5KM9XojaxPanxyP_5hTcUfxjzWqcU8ldlac9hQCYCSHNulEGaxvBcdBSVIV72T1VEZZGifzNeWLT3Z_YpwY4Ci7Ub5Y-RxIomSgNA?width=256&height=144&cropmode=none',
        likes: 13
      },
      {
        id: 3,
        src: 'https://hfdktg-sn3302.files.1drv.com/y4mVfYu_G-0Db4a5OPLfF8J5xskdtOmvFG2PE_ecmiLi3cLMeGRN_o7bUyWhjaq1UpXp1byh3go_snIuUvnrxFddQ9vIbsGyZL-NnZIEoZYIV2hU5oIB5KM9XojaxPanxyP_5hTcUfxjzWqcU8ldlac9hQCYCSHNulEGaxvBcdBSVIV72T1VEZZGifzNeWLT3Z_YpwY4Ci7Ub5Y-RxIomSgNA?width=256&height=144&cropmode=none',
        likes: 0
      }
    ]
  }
  res.send(user);
})

app.get('/:username', function (req, res){
    res.render('index', { title: `PlatziGram - ${req.params.username}` })
})


app.listen(3000, function(err){
        if (err) return console.log ('Hubo un error'), process.exit(1);
        
        console.log('EmilioGram Escuchando por el puerto 3000')
})