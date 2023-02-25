const express = require('express')
const Visitor = require('../model/VisitorCount')
const ip = require('ip');
const { findOne } = require('../model/VisitorCount');

const router = express.Router();

router.get('/', async (req, res) => {

    let visitorList = await Visitor.findOne({ name: 'Visitors Count' });
    let repeatVisitor = await Visitor.findOne({ visitorIp: req.ip })

    if (visitorList == null) {
        const newList = new Visitor({
            name: "Visitors Count",
            totalVisits: 1,
            totalUniqueVisits : 8
        })
        const saving = await newList.save();
        // console.log(saving)
        // res.json(saving)
    }
    else if (repeatVisitor == null) {
        const uniqueVisitor = new Visitor({
            visitorIp: req.ip
        })
        visitorList.totalUniqueVisits +=1
        await visitorList.save()
        await uniqueVisitor.save()
        visitorList.totalVisits += 1;
        // res.json(visitor)
    }

    else {
        visitorList.totalVisits += 1;
        await visitorList.save();
        // console.log("Repeated User")
    }
    res.status(200).json({currentIp : req.ip, visitorList, Visitor})
})



module.exports = router;