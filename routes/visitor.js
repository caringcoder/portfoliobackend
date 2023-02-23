const express = require('express')
const expressSession = require('express-session');
const expressVisitorCounter = require('express-visitor-counter');

const router = express.Router();

const { MongoClient } = require('mongodb');

(async () => {
    const dbConnection = await MongoClient.connect(`mongodb+srv://Adityadev:${process.env.SECRET_PASS}@cluster0.75kbw6j.mongodb.net/Connect-Us?retryWrites=true&w=majority`, { useUnifiedTopology: true });
    const counters = dbConnection.db().collection('counters');

    router.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: true }));
    
    router.use(expressVisitorCounter({ collection: counters }));

    router.get('/', async (req, res, next) => res.json(await counters.find().toArray()));

})();
// router.use('/', (req, res) => {
//     res.send("Visitor Route")
// })

module.exports = router;