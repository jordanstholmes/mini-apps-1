const $ = jQuery;
const options = {
  url: 'http://localhost:3000/handle-json',
  data: undefined,
  method: 'POST',
  contentType: 'text/plain'
};

const reader = new FileReader();
reader.onloadend = (e) => {
  var downloadURL;
  options.data = e.target.result;
  $.ajax(options)
  .done(results => {
    downloadURL = results;
    $.ajax({
      url: downloadURL,
      data: undefined,
      method: 'GET'
    })
    .done(results => {
      $display = $('#display').text(results);
      $('#links-container').append(`<a href=${downloadURL}>Download CSV file</a>`);
    })
  });
}

document.addEventListener('DOMContentLoaded', () => {

  var $display = $('#display');
  var $converterForm = $('#json-converter');
  var fileInput = document.getElementById('file-input');

  $converterForm.submit( e => {
    var file = fileInput.files[0];
    reader.readAsText(file);

    e.preventDefault();

    
  });
});


