const express = require('express');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const app = express();

app.use(express.json());
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://qwerty:qwerty123@cluster0.lp6rp.mongodb.net/survey-app?retryWrites=true&w=majority',
            { useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log(`server started on port ${PORT}...`))
    }
    catch (err) {
        console.error(err)
    }
}
start();
