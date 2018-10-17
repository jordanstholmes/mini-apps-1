const $ = jQuery;
const options = {
  url: 'http://localhost:3000/handle-json',
  data: undefined,
  method: 'POST',
  contentType: 'text/plain'
};

const reader = new FileReader();
reader.onloadend = (e) => {
  // console.log(e.target.result);
  options.data = e.target.result;
  $.ajax(options)
  .done(results => {
    $display = $('#display').text(results);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // var $convertBtn = $('#convert-btn');

  // $convertBtn.click((e) => {

  // })
  var $display = $('#display');
  var $converterForm = $('#json-converter');
  var fileInput = document.getElementById('file-input');

  $converterForm.submit( e => {
    var file = fileInput.files[0];
    // console.log('FILE INPUT', fileInput.files[0]);
    reader.readAsText(file);


    // var formData = $('#json-converter').serialize();
    // console.log('FORM DATA', formData);

    // var $file = $('input:file');
    // console.log($file);

    // options.data = $file;
    // console.log('form submited');

    // var request = $.ajax(options);

    // request.done((result) => {
    //   console.log(result);
    // });

    e.preventDefault();
    // console.log($file);

    
  });
  // console.log($converterForm);

});


