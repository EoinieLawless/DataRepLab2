const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post(`/api/books`, (req,res)=>{
    console.log(req.body);
    res.send('Data recieved')
})

app.get (`/datarep`, (req,res)=>{
    res.send(`Welcome to Data
    Representation & Querying`)
})

app.get (`/hello/:name`, (req,res)=>{
    console.log(req.params.name);
    res.send(`Hello ` +req.params.name);
})

app.get (`/api/books`, (req,res)=>{
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
       
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
    ]
   
    
    res.json({

        mybooks:books,
        message:'hello from the server'

    })
})

 app.get (`/test`, (req,res)=>{
        res.status(201).sendFile(__dirname+`/index.html`);
})

app.get (`/name`, (req,res)=>{
    console.log(req.query.fname);
    res.send('Hello '+ req.query.fname + `` + req.query.lname)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post(`/name`, (req,res)=>{
    console.log(req.body);
    res.send(`HEllo from post `+ req.body.fname + ` ` + req.body.lname);
})



