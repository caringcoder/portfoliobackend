const express = require('express')
const Visitor = require('../model/VisitorCount')
const ip = require('ip')

const router = express.Router();

router.get('/', async (req, res) => {
    let visitorList = await Visitor.find()
    let currentIp = ip.address();

    const uniqueVisit = new Visitor({
        visitorIp: currentIp
    })
    const saving = await uniqueVisit.save();
    res.json(visitorList)

})

module.exports = router;