$(function () {
  $(window).bind("resize", function () {
      console.log($(this).width())
      if ($(this).width() < 552) {
          $('.table-inner').addClass('question-item');
          $('.inner-block-3 ').addClass('question-item-body');
      } else {
        $('.table-inner').removeClass('question-item');
        $('.inner-block-3 ').removeClass('question-item-body');
      }
  }).trigger('resize');
})

let questionItems1 = document.querySelectorAll(".table-inner");

questionItems1.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("question-item--active");
  });
});



let questionItems = document.querySelectorAll(".question-item");

questionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("question-item--active");
  });
});