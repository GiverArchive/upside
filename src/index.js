const express = require("express");
const app = express()

const hello = async (req, res) => {
  return res.send('World!');
}

app.get("hello", hello);
app.listen(3000);
