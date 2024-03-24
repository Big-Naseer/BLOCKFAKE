import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './src/database/db.js'
import routers from './src/route/index.js';

dotenv.config();

const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/route", routers)

// routers(app)

const startServer = async () => {
    const PORT = process.env.PORT || 1177;
    try {
      connectDB(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      app.listen(PORT, () => console.log(`Server port: ${PORT} `));
    } catch (error) {
      console.log(error);
    }
};

startServer()

app.get("/", (req, res) => {
    res.send("Api is responding");
})