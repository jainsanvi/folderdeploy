const express = require('express')
const serverless = require("serverless-http");

// const cors = require('cors')

const app = express();
const router = express.Router();

router.get("/",(req,res) =>{
    res.send("Success")
})

app.use("/.netlify/functions/index", router);

module.exports.handler = serverless(app);
