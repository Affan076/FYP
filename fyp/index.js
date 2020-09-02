var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();
const port = process.env.PORT || 3000;
//const port = 3000;

const route = require('./routes');


mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
    // console.log('Connected to mongodb');
});


mongoose.connection.on("error", (err) => {
    if (err) {
        console.log('Error in mongodb connection' + err);
    }
});


app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/data', route);
//const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('foobar');
});


const server = app.listen(port, () => {
    console.log('Server started at port:' + port);
});



















































// app.use(function (req, res, next) {
//     //Enabling CORS 
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
//     next();
// });

// config for your database
// var dbConfig = {
//     user: 'sa',
//     password: 'Affan123',
//     server: 'localhost', 
//     database: 'FYP'   
// };

// var  executeQuery = function(res, query){             
//     sql.connect(dbConfig, function (err) {
//         if (err) {   
//                     console.log("Error while connecting database :- " + err);
//                     res.send(err);
//                  }
//                  else {
//                     console.log("connecting database :- ")
//                         // create Request object
//                         var request = new sql.Request();
//                         // query to the database
//                         request.query(query, function (err, result) {
//                           if (err) {
//                                      console.log("Error while querying database :- " + err);
//                                      res.send(err);
//                                     }
//                                     else {
//                                       res.send(result);
//                                            }
//                               });
//                       }
//      });           
// }

// var server = app.listen(5000, function () {
//     console.log('Server is running..');
// });

// app.get("/", function(req , res){
//     var query = "select * from data";
//     executeQuery(res, query);
// });


// app.post("/api/user", function(req , res){
//     var query = "INSERT INTO [data] (id,name,lat,long) VALUES (5,'Afan',33.7133551953667,73.02695993463276)";
//     executeQuery (res, query);
// });


// app.delete("/api/user/:id", function(req , res){
//     var query = "DELETE FROM [data] WHERE Id=" + req.params.id;
//     executeQuery (res, query);
// });