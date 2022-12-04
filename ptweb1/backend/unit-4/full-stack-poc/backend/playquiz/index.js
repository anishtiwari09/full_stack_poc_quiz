const PORT=5555
const express=require('express');
const connect = require('./Config/db.config');
const router=require('./router')
require('dotenv').config()
const app=express();
app.use('/',router);
(async () => {
    await connect()
    app.listen(PORT, () => {

        console.log("Connected at " + PORT)
    })
})();