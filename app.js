require("dotenv").config();

const path = require('path');
const express = require('express');
const app= express();
const PORT = process.env.PORT || 4700;
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
const bodyparser = require('body-parser');//use with axios 
const mongoose = require('mongoose');

const { mongoConnect } = require('./database/database.js');
const session = require('express-session')
const MongoDBsession = require('connect-mongodb-session')(session);


// app.set('views',path.join(__dirname, 'views'));
app.set('view engine','hbs');


app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



const store = new MongoDBsession({
    uri: process.env.MONGODB_URL,
    collection: "mysessions"
});

app.use(
    session({
        secret:'secret key for cookie',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);




const landingpageRouter = require('./routes/landingpage.js');


app.use('/', landingpageRouter);

const adminpageRouter = require('./routes/adminpage.js');

app.use('/admin', adminpageRouter);

// app.get('/rankings', (req, res ) =>{

//     console.log('inside get');
//     res.send('some ranking data')
// })



// app.listen(PORT, () => {
//     console.log(`http://localhost:` + PORT);
// })
//mongodb+srv://mayankgautam0811:<password>@cluster0.hv7zef4.mongodb.net/?retryWrites=true&w=majority
//wwZnjaDJ_tGG5Yw


const adminhomeRouter = require('./routes/adminhome.js');

app.use('/adminhome', adminhomeRouter);



mongoose.connect(process.env.MONGODB_URL ,{
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
   // useCreateIndex: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(err => {console.error(err);});



    