require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3003;

const app = express();

if (process.env.PORT) {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => console.log(`server started on port ${PORT}`))