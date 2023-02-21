const  express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}))

app.get("/" , function(req,res){
  res.sendFile(__dirname+"/index.html")
});


app.post("/" , function(req, res){
  const gold = Number(req.body.gold)
  const value = Number(req.body.value)

  const ans = gold*value/1000
  res.send(ans + "<h1> This is your Final price  </h1>" )
})



  app.listen(3000,function(){
    console.log("working in 3000");
  })
