module.exports = (json) => {
  const parsedJSON = JSON.parse(json);
  // console.log(parsedJSON);

  console.log(_getHeaders(parsedJSON));
  
}

function _getHeaders(jsonObj) {

  function getHeaders(obj) {
    Object.keys(obj).forEach(key => headers.add(key));
    
    if (obj.children.length > 0) {
      obj.children.forEach(child => getHeaders(child));
    }
  }

  var headers = new Set();
  getHeaders(jsonObj);
  headers.delete('children');

  return headers;
}

function _getHeadersStr(set) {
  return Array.from(headers).join(',') + '\n';
}

function _getRowsStrings(jsonObj, headers) {

  function getRows() {

  }
}

