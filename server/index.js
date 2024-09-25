const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./router/auth');

const PORT = process.env.PORT || 3000;
const app = express();


const DB = "mongodb+srv://ritikjoshi741:9456597017ritik@cluster0.8l3eq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log(`error:- ${e}`);
})

app.use(express.json());
app.use(authRouter);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
})