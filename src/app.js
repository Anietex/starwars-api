import express from "express";
import cors from "cors"
import moviesRoutes from './modules/movies/routes'



const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/', moviesRoutes)


app.all('*', async (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Invalid API URL"
    })
})

export default app
