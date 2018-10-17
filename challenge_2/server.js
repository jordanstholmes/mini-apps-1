const express = require('express');
const path = require('path');
const multer = require('multer');
const JSONConverter = require('./convertJSON.js');
const parser = require('body-parser');
const fs = require('fs');
// const template = require('./template.js');

const upload = multer();
var fileCount = 0;


const port = 3000;
const app = express();
// app.set('views', './views');
// app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'client')));
app.use(parser.text());

// app.post('/handle-json', upload.single('jsonToConvert'), (req, res, next) => {


app.post('/handle-json', (req, res, next) => {
  // const csv = JSONConverter(req.file.buffer.toString());
  const csv = JSONConverter(req.body);
  // console.log('BODY', req.body);
  // console.log('FILE', req.file);
  var fileName = `csv${fileCount}.csv`;
  fs.writeFile(`./client/${fileName}`, csv, (err) => {
    if (err) {
      throw err;
    }
    res.send(`http://localhost:3000/${fileName}`);
  });

  // res.send(csv);  
  console.log(csv);
  // res.end();
  // res.send(csv);
  // res.render('index', {csv});
  // res.end();
  fileCount++;
});


app.listen(port, () => {
  console.log(`listening at ${port}...`);
});


