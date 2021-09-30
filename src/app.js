import express from "express";
import cors from "cors"
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'Works from docker mounted'} )
})

export default app
