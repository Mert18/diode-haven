const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
