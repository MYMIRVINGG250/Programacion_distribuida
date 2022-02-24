const express = require("express");
require("dotenv").config();
const app=express();
const {appconfig}= require("./Config/config");
app.listen(appconfig.port ,()=> console.log());