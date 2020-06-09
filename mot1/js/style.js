
$(function () {
  $('.burger').on('click', function () {
    $('.header__menu').toggleClass('active');
  })

  $('.slider').slick({
    slidesToShow: 1,
    fade: true,
    waitForAnimate: true
  });
  $('.offer__slider').slick({

    variableWidth: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  });
  $('.slider__fly').slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1

        }
      }
    ]
  });

  $('.bikes__slider').slick({
    slidesToShow: 4,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  });


  var btnTop = $('.btn-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      btnTop.fadeIn();
    }
    else {
      btnTop.fadeOut();
    }
  });


  btnTop.on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 900);
  });
});

