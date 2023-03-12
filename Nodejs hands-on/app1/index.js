// import 'dotenv/config'




import express from 'express';
const app = express();



app.use(logger)


function logger(req, res, next) {
    console.log("log");
    next();
}

app.get('/', logger, (req, res, next) => {
    // res.render(__dirname + './index.html')
})
app.get('/test', (req, res, next) => {
    // res.render(__dirname + './index.html')
})
app.listen(3000, () => {
    console.log('server started');
})


