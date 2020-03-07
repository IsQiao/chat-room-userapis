import express from 'express'

const app = express();

app.listen(5002, (req) => {
    console.log("hello world!");
});

