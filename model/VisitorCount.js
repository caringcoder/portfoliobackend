const mongoose = require('mongoose')

const visiterCounter = mongoose.Schema({
    name: {
        type: String
    },
    visitorIp: {
        type: String,
        required : true
    }
    
})

module.exports = mongoose.model('Visitor-Count', visiterCounter)