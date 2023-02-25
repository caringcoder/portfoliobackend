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

})

module.exports = mongoose.model('VisitorsData', visiterCounter)