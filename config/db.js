const mongoose = require('mongoose');
const connectDB= async() => {
    const conn = await mongoose.connect('mongodb://localhost/test',
     {useNewUrlParser: true, useUnifiedTopology: true}
    )
     console.log(`MongoDB Connected:${conn.connection.host}`)
    };
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
// module.exports = connectDB;
module.exports = connectDB;