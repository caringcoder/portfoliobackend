const mongoose = require('mongoose')

const visiterCounter = mongoose.Schema({
    visitorIp: {
        type: String,
        required : true
    }
    
})

module.exports = mongoose.model('VisitorsData', visiterCounter)