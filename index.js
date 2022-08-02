const express = require('express');
require('dotenv').config();

const userRouter = require('./routes/user.routes');


const app = express();



// middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH, UPDATE");
    next()
});



// routes
app.get('/', (req, res) => {
    res.send('START route');
});

app.use('/api/data', userRouter);




// connection
const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));