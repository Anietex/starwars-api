import express from "express";
import cors from "cors"
import moviesRoutes from './modules/movies/routes'



const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/', moviesRoutes)

app.get('/', async (req, res) => {
    res.send({ message: 'Welcome'} )
})

export default app
