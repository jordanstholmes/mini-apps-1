const $ = jQuery;
const options = {
  url: 'http://localhost:3000/handle-json',
  data: undefined,
  method: 'POST'
};

document.addEventListener('DOMContentLoaded', () => {
  // var $convertBtn = $('#convert-btn');

  // $convertBtn.click((e) => {

  // })
  var $converterForm = $('#json-converter');
  $converterForm.submit( e => {
    var $file = $('input:file');
    options.data = $file;

    $.ajax(options)

    console.log('form submited');
    console.log($file);

    e.preventDefault();
  });
  // console.log($converterForm);

});


