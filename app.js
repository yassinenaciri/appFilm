const express = require('express')
const bodyParser =require('body-parser')
const cors=require('cors');
const app = express()
app.use(cors());
const path = require('path');
const morgan =require('morgan')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :false}))
app.use(morgan('dev'))
const port = 3000;
const filmsRoute=require('./roots/filmsRoot');
const commentsRoute=require('./roots/commentsRoot');
const userRoute=require('./roots/userRoot');


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods" , "GET,POST,PATCH,PUT,DELETE,OPTIONS" );
    next();
});
app.use(express.static('./dist/angular'));
app.get('*', (req, res)=> {
  const index = path.join(__dirname, '/', './dist/angular', 'index.html' );
  res.sendFile(index);
});


app.use('/api/films/',filmsRoute);
app.use('/api/users/',userRoute);
app.use('/api/comments/',commentsRoute);


app.listen(port)