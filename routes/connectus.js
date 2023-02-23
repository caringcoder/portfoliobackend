const express = require('express')
const Message = require('../model/Message')

const router = express.Router();


router.post('/', async (req, res) => {
   
    try {   
        const message = new Message({
            name: req.body.name,
            email : req.body.email,
            message : req.body.message
        })
        const a1 = await message.save();
        res.status(200).send(a1)

    } catch (error) {
        res.status(500).json('Error')
    }
})

router.get('/',async(req,res)=>{
    const messages = await Message.find()
    res.status(200).json(messages)
})


module.exports = router