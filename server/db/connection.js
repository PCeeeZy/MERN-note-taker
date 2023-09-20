const mongoose = require('mongoose');

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://127.0.0.1:27017/note_api_db')
}

module.exports = mongoose.connection;