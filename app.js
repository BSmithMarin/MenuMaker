const express = require("express");

const app = express();
const port = 3000;

app.post("/hola", (req, res) => {
  console.log("post resquest recieved");
  res.send("{message: 'post'}");
});

app.get('/user/hola:userId(\\d+)pal', (req, res) => {
  console.log("get request");
  console.log(req.params);
  res.send("{message: 'get'}");
});

app.get(/almon/, (req,res) => {
  console.log(req.url);
  res.send("anything with a");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
