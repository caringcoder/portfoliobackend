const express = require('express')
const Visitor = require('../model/VisitorCount')
const ip = require('ip')

const router = express.Router();

// router.get('/', async (req, res) => {
//     const visitor = await Visitor.findOne({ name: "TotalVisitors" })
//     if (visitor == null) {
//      const beginCount = new Visitor({
//         name : "TotalVisitior",
//         visitorCount : 1
//      })
//      beginCount.save()

//      // Sending the count of visitor to the browser
//      res.send(`<h2>Counter: `+1+'</h2>')
//     }
//     else {
//         visitor.visitorCount += 1;
//         // Saving to the database
//         visitor.save()

//         // Sending the count of visitor to the browser
//         res.send(`<h2>Counter: `+visitor.visitorCount+'</h2>')
//     }
// })

router.get('/', async (req, res) => {

    let uniqueIp = await Visitor.findOne({ visitorIp: ip.address() })
    let currentIp = ip.address();

    let visitors =  await Visitor.count('visitorIp');
    console.log(visitors-1)

    if (uniqueIp) {
        const uniqueVisit = new Visitor({
            visitorIp: currentIp
        })
        const saving = await uniqueVisit.save();
        res.json(saving)
    }
})

module.exports = router;