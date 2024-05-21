import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//API
app.get('/news', async (req, res) => {
    try{
        const response = await fetch('https://chroniclingamerica.loc.gov/newspapers.json',{
         method: 'GET'
    });
    if(!response.ok){
        throw new Error('Cant fetch news from API');
    }
    const data = await response.json();
    res.json(data);
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'error'})
    }
});
//MONGODB
const mongourl = process.env.MONGO_URL
const mongoclient = new MongoClient(mongourl, {});

mongoclient.connect().then(() => {
    console.log('Connected to MongoDB')
})

app.get('/', (req, res) => {
    res.send('/')
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})