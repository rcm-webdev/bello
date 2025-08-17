const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './config/.env'});

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.send('hello from express');
    res.status(200);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. You better catch it!`);
    
})