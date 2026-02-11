<<<<<<< HEAD
const dns = require('node:dns').promises;
dns.setServers(['1.1.1.1', '8.8.8.8']);

const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {

        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

=======
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Conected: ${conn.connection.host}`);
    } catch (error) {

        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

};

>>>>>>> ce62fd17a920762a782d9b5b99cb1b56be496c09
module.exports = connectDB;