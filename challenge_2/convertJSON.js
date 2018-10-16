module.exports = (json) => {
  const parsedJSON = JSON.parse(json);
  // console.log(parsedJSON);

  console.log(_getHeadersString(parsedJSON));
  
}

function _getHeadersString(jsonObj) {

  function getHeaders(obj) {
    Object.keys(obj).forEach(key => headers.add(key));
    
    if (obj.children.length > 0) {
      obj.children.forEach(child => getHeaders(child));
    }
  }

  var headers = new Set();
  getHeaders(jsonObj);
  headers.delete('children'));

  return Array.from(headers).join(',');
}

