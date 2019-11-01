var createError = require("http-errors");
var express     = require("express");
var path        = require("path");
//const csrf      = require('csurf');
//const cors      = require('cors');
const session   = require('express-session');
var cookieParser = require("cookie-parser");
var logger      = require("morgan");
const mongoose  = require("mongoose");
var bodyParser  = require("body-parser");

const indexRouter = require("./server/routes/index");
const databaseRouter = require("./server/routes/database");
const loginRouter = require('./server/api/login');
const logoutRouter = require('./server/api/logout');

var app = express();
const port = process.env.PORT || 5000;

// Write logger by morgan module
const fs = require('fs');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger("combined", {stream: accessLogStream}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}))

//app.use(cors());
//app.use(csrf({cookie: false}));

/*app.all('*', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.render('index')
})*/

// Use to build RESTFUL API: exchange data
// CORS: Cross-Origin Resource Sharing: because different service or different domain
/*app.use((req, res, next) => {
    // Allow domains name access own website and sharing data
    res.setHeader('Access-Control-Allow-Origin', '*'); // domains name
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type, X-Access-Token, X-Requested-With');
    next();
})*/

app.use("/", indexRouter);  
app.use("/database", databaseRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);

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
    res.send("Server Error!");
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/istore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    // we're connected!
    console.log("Database connected");

    app.listen(port, () => {
        console.log("Server starting..");
    });
});
