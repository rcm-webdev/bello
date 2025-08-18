const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const campaignRouter = require('./routes/campaignRoute');

dotenv.config({path: './src/config/.env'});

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/campaigns', campaignRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. You better catch it!`);
    
})