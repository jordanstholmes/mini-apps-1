const express = require('express');
const path = require('path');
const multer = require('multer');
const JSONConverter = require('./convertJSON.js');
const template = require('./template.js');

const upload = multer();



const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.post('/handle-json', upload.none(), (req, res, next) => {
  const csv = JSONConverter(req.body.jsonToConvert);
  
  res.send(template({csv}));
  // res.end();
});


app.listen(port, () => {
  console.log(`listening at ${port}...`);
});


