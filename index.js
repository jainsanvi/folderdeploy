const express = require('express')
const serverless = require("serverless-http");

// const cors = require('cors')

const app = express();
const router = express.Router();

router.get("/",(req,res) =>{
    res.send("Success")
})

module.exports.handler = serverless(app);
