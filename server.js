const express = require('express');
const cors = require('cors');
const router = require('./Router/router');
require('dotenv').config();

const ConnectToDatabase = require('./Database');


//Database Connection
ConnectToDatabase();

const app = express();
const port = process.env.PORT || 8080

app.use(express.json());
app.use(cors());

//router

app.use('/api', router);


app.listen(port, () => { 
  console.log(`http://localhost:${port}/api`);
});