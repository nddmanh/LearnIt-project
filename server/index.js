// Config dotenv
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authRoute');
const postRouter = require('./routes/postRoute');
const {connectDB} = require('./configs/db');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const PORT = process.env.APP_PORT || 5000;

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})