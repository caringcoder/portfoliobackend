const mongoose = require('mongoose')

const visiterCounter = mongoose.Schema({
    name: {
        type: String
    },
    totalVisits: {
        type: Number
    },

    totalUniqueVisits: {
        type: Number
    },
    visitorIp :{
        type : String
    }

})

module.exports = mongoose.model('VisitorsData', visiterCounter)