$(document).ready(function() {

  $('.form_lead').on('submit', function (e) {
    var formsend = this;
    $.ajax({
      url: "/form.php",
      type: "POST",
      dataType: 'html',
      data: $(formsend).serialize(),
      success: function (response) {
        //Сюда можно засунуть код при успешной отправке письма, например цель в метрику или показ попапа Спасибо
        console.log(response);
        alert("Заявка успешно отправлена! Наш менеджер в скором времени свяжется с вами!");
      },
      error: function(response) {
        console.log(response);
      }
    });
    return false;
  });

});