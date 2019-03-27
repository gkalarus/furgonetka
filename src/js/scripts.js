$(function () {
  var $newClientRadio = $('#newClient');
  var $haveAccountRadio = $('#haveAccount');
  var $inputEmail = $('.inputEmail');
  var $inputPassword = $('.inputPassword');
  var $inputCode = $('.inputCode');
  var $checkbox = $('.custom-checkbox');
  var $radios = $('input:radio[name=formRadio]');
  var $newClient = $('.newClient');
  var $button = $('button');
  var $logIn = $('.logIn');

  if ($radios.is(':checked') === false) {
    $radios.filter('[value=Registered]').prop('checked', true);
  }

  $newClientRadio.on('click', function () {
    $inputEmail.hide();
    $inputPassword.hide();
    $inputCode.hide();
    $checkbox.hide();
    $newClient.attr('style', 'display:block');
    $button.html('Zarejestruj się');
    $logIn.html('Zarejestruj się');
  })

  $haveAccountRadio.on('click', function () {
    $inputEmail.show();
    $inputPassword.show();
    $inputCode.show();
    $checkbox.show();
    $newClient.attr('style', 'display:none');
    $button.html('Zaloguj się');
    $logIn.html('Zaloguj się');
  })



});