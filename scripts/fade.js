$(allInView);
$(window).scroll(allInView);

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function fadeIn(element) {
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.03;
  }, 10);
}

let visible = false;

function allInView() {
  if (!visible && isScrolledIntoView($("#elevatorPitch"))) {
    fadeIn(document.getElementById("elevatorPitch"));
    visible = true;
  }
}
