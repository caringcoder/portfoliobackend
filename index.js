const express =require('express')
const cors = require('cors')
require('dotenv').config();
const connectusRoute = require('./routes/connectus')
const visitorRoute = require('./routes/visitor')
const dbConnection = require('./DatabaseConnect/dbConnection')

dbConnection();
const app = express();
const PORT = 5000 || process.env.PORT ;

app.enable('trust proxy')
app.use(cors())
app.use(express.json())

app.use('/visitor',visitorRoute)
app.use('/connectus',connectusRoute)

app.use('/',(req,res)=>{
    res.send('Hello From Server')
})

app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`);
})