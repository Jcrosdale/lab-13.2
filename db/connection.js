// In this file, use mongoose.connect() to establish a connection to your database using the URI from your .env file.
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export your connection logic.
module.exports = mongoose.connection;
