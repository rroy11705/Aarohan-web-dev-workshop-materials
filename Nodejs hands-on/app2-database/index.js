import express, { urlencoded } from "express";

import mongoose from 'mongoose'
import User from "./models/userModel.js";

const app = express();

app.listen(8000, () => {
    console.log("server is listening on port 3000...");
})
app.use(express.json());
const databaseUrl = 'mongodb://localhost:27017/test2'
mongoose.connect(databaseUrl).then(() => {
    console.log("Db connected");
}).catch((err) => {
    console.log(err);
});

app.get('/', async (req, res) => {
    const user = await User.create({
        name: "Arpan",
        email: "a@a.com",
    });
    console.log(user);
});

app.post('/', async (req, res) => {
    try {
        const name = req.body
        console.log(req.body);
        const user = await User.create({ name: req.body.name })
    } catch (err) {
        console.log(err);
    }

})