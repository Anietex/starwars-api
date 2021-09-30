import express from "express";
import cors from "cors"
import { Country } from './models'


const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.get('/', async (req, res) => {
    res.send({ message: 'Welcome'} )
})

export default app
