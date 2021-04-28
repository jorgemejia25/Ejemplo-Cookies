const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path')
const cookieParser = require('cookie-parser');

// Cookie config
app.use(cookieParser());

// View dir
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/index'))


server.listen(3000, () => {
    console.log(`Server listening at port 3000`)
})