//Package Dependencies 

const express = require('express')
const cors = require('cors')
// const {
//   graphqlHTTP
// } = require('express-graphql');
// const {
//   graphql
// } = require('graphql')
const passport = require("passport"),
  LocalStrategy = require('passport-local').Strategy;

const path = require('path');
//Local imports 
const user_routes = require('./routers/users')
require('./config/passport')(passport);

//Config

//Declartions
const port = 4000
const app = express()

//Error Handling:
function errorHandler(err, req, res, next) {
  res.json({
    err: err
  })
}

// mongoose.connect(config, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   })
//   .then((result) => {
//    
//   })
// const db = mongoose.connection
// db.on("error", console.error.bind(console, "mongo connection error"))

//App USE 
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));
app.listen(port, console.log(`Server connected to DB | http://localhost:${port}/`))








//User route used for AUTH
app.use('/api/user/', user_routes)


//Error handling for non existing API requests
app.get('*', function (req, res) {
  res.status(404).send('404');
});



// app.use('/graphql', graphqlHTTP({ schema, graphiql: true}));