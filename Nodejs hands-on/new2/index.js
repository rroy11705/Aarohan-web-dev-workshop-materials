import express from 'express';
import mongoose from 'mongoose';
import name from './model/user.js';
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/demonstration')
    .then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log(err);
    })

app.use(express.json());


async function getData(req, res) {
    const names = req.body.name;
    const email = req.body.email;

    const users = await name.create({
        name: names,
        email: email
    });
    res.json({ message: users });
}

app.post('/insert-data', getData);























function logger(req, res, next) {
    console.log("I am logging");
    next();
}

app.get("/", logger, (req, res) => {
    res.send("hello from server...")
})

app.get("/name", (req, res) => {
    res.send("Arpan")
})

app.listen(8000, () => {
    console.log('server started');
})
