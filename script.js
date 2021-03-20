var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },

        {
          duration: 2500,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }
        }
      );
    });
    a = 1;
  }
});

$(window).mousemove(function (evt) {
  var pagex = evt.pageX;
  var pagey = evt.pageY;

  var x = pagex - $("#section_about").offset().left;
  var y = pagey - $("#section_about").offset().top;

  $(".mountain").css("transform", "translateX(" + (pagex / -20 + 50) + "px)");

  $(".h6").css("transform", "translateX(" + x / -17 + "px)");
  $(".h6_2").css("transform", "translateX(" + x / -25 + "px)");
  $(".h6_1").css("transform", "translateX(" + x / -25 + "px)");
});

// ---------