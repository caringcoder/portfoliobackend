const mongoose = require('mongoose');

const URI = `mongodb+srv://Adityadev:${process.env.SECRET_PASS}@cluster0.75kbw6j.mongodb.net/Connect-Us?retryWrites=true&w=majority`


const connection = () => {
    try {
        mongoose.connect(URI)
            .then(console.log("MongoDb Connected"))
            .catch(()=>console.log("MongoDb Not Connected"))
    } catch (error) {
        console.log("Some Error Occured")
    }
}

module.exports = connection;