var createError = require("http-errors");
var express = require("express");
var path = require("path");
const session = require('express-session');
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

var indexRouter = require("./server/routes/index");
const loginRouter = require('./server/routes/login');

<<<<<<< HEAD
=======

>>>>>>> 49f6930e6ee1a8b98a900d2f1921edaa68ddcd66
var databaseRouter = require("./server/routes/database");
var citiesApi = require("./server/api/cities.api");
var districtsApi = require("./server/api/districts.api");
var authorizationsApi = require("./server/api/authorizations.api");
var usersApi = require("./server/api/users.api");
//var avatarsApi = require("./server/api/avatar.api");
var hostelsApi = require("./server/api/hostels.api");

var app = express();
<<<<<<< HEAD
const port = process.env.PORT || 5000;
=======
const port = process.env.PORT || 8080;
>>>>>>> 49f6930e6ee1a8b98a900d2f1921edaa68ddcd66

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/db247hostel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    // we're connected!
    console.log("Database connected");
});

// Write logger by morgan module
const fs = require('fs');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
})

app.use(logger("combined", {stream: accessLogStream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use('/login', loginRouter);


app.use("/database", databaseRouter);
app.use("/api/cities", citiesApi);
app.use("/api/districts", districtsApi);
app.use("/api/authorizations", authorizationsApi);
app.use("/api/users", usersApi);
//app.use("/api/avatars", avatarsApi);
app.use("/api/hostels", hostelsApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.listen(port, () => {
    console.log("Server starting..");
});
