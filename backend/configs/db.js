const mongoose = require("mongoose");

module.exports = async function connection() {
    const connectionParams = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    };
    try {
        await mongoose.connect(process.env.DB_URI, connectionParams);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
};