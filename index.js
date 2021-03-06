const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require("./models/Survey");
require('./services/passport');

mongoose.connect(keys.mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err));

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/billingRoutes")(app);
require('./routes/authRoutes')(app);
require("./routes/surveyRoutes")(app);

if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  })
}

const PORT = process.env.PORT || 3000;
app.listen(PORT);
