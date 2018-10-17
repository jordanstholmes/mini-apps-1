const _ = require('underscore');

const templateStr = 
`<!DOCTYPE html>
<html>

  <head>
  <meta charset="UTF-8">
  <title>JSON to CSV Converter</title>
  </head>

  <body>

    <form action='/handle-json' method='post' enctype="multipart/form-data">
      <button type='submit'>Convert</button><br>
      <input type='file' name='jsonToConvert'/>
    </form>

    <textarea style='height:200px;width:400px'><%= csv %></textarea>

  </body>

</html>`

module.exports = _.template(templateStr);
