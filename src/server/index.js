const express = require("express");
const app = express();
const port = process.env.PORT || "5000";



app.get('/', (req,res) =>{
  res.send("App")
} )

app.listen(port, () => console.log(`server started running on Port ${port}`));