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
      <input type='text' name='jsonToConvert'/>
      <button type='submit'>Convert</button>
    </form>

    <textarea>Just a test</textarea>

  </body>

</html>`

module.exports = _.template(templateStr);
// <%-jsonToConvert%>