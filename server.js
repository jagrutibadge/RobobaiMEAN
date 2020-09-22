var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api_routes = require('./backend/api');
var logger = require('morgan');

const port = 3000;
var app = express();

const cors = require('cors');
app.use(cors());

app.listen(port, () => {
    console.log("Server is listening on port: 3000");
});

mongoose.connect('mongodb://localhost:27017/robobai', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use(logger('dev'));
app.set('views', path.join(__dirname, 'src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, 'dist/robobai')));

app.use('/api', api_routes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist/robobai", "index.html"));
});