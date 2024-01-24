const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

// GET test to Postman 
app.get('/', (req, res) => {
    res.send('This is a GET request to root');
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});