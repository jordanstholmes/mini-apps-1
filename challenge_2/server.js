const express = require('express');
const path = require('path');
const multer = require('multer');
const JSONConverter = require('./convertJSON.js');
const template = require('./template.js');

const upload = multer();



const port = 3000;
const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'client')));

app.post('/handle-json', upload.single('jsonToConvert'), (req, res, next) => {
  const csv = JSONConverter(req.file.buffer.toString());
  
  res.render('index', {csv});
  // res.end();
});


app.listen(port, () => {
  console.log(`listening at ${port}...`);
});


