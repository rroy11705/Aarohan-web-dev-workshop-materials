import express from 'express';

const app = express();
function logger(req, res, next) {
    console.log("This is  a logger");
    // next();
}

app.get("/dfdfdfdf", logger, (batman, ironman) => {
    ironman.send("hello from server")
})

app.listen('8000', () => {
    console.log("Hello..")
})