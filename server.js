const express = require('express');
const mongojs = require('mongojs');
const mongoose = require("mongoose");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));


//mongoose.connect(process.env.MONGODB_URI || "mongodb://workout:workout123@ds033767.mlab.com:33767/heroku_jrjwb66m", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_m3f7tjvj:uhhq67nv9deifu1itbrjovb7o3@ds035557.mlab.com:35557/heroku_m3f7tjvj", {
   userNewUrlParser: true,
   useFindAndModify: false
})

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
 

app.listen(5000, () => {
    console.log(`Listening on port ${PORT}`)
});