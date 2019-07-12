const express = require('express');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/assign1-crud', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const taskRouter = require('./routes/task');
app.use('/tasks', taskRouter);

app.listen(port, () => console.log('Server is up on port '+port));