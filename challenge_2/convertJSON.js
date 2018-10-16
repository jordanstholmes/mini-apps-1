module.exports = (json) => {
  const parsedJSON = JSON.parse(json);
  const headers = _getHeaders(parsedJSON);
  // console.log('HEADERS:', headers);
  const rows = _getRowsStrings(parsedJSON, headers);

  // console.log('ROWS:', rows);
  return rows.join('\n');
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
  return Array.from(set).join(',');
}

function _getRowsStrings(jsonObj, headers) {
  var rows = [];
  rows.push(_getHeadersStr(headers));

  function getRows(obj) {
    var row = [];

    headers.forEach(entry => {
      row.push(obj[entry]);
    });

    rows.push(row.join(','));

    if (obj.children.length !== 0) {
      obj.children.forEach(child => getRows(child))
    }
  }

  getRows(jsonObj);

  return rows;
}

