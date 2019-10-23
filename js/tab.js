// Tab carousel product

function switchTab(nextTab) {
  var idNextTab = $(nextTab).attr('data-tab');

  $('.js-tab [data-tab]').removeClass('tab__active');
  $(nextTab).addClass('tab__active');
  $('.carousel-product__main').hide();
  $(`#${idNextTab}`).show();

  $(`#${idNextTab} .js-carousel-product`).slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $(`#${idNextTab} .control-next`),
    prevArrow: $(`#${idNextTab} .control-prev`),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
}

$('.js-tab [data-tab]').click(function (e) {
  var idCurrentTab = $('.js-tab .tab__active').attr('data-tab');

  $(`#${idCurrentTab} .js-carousel-product`).slick('unslick');
  e.preventDefault();
  switchTab(this);
});

switchTab($('.js-tab [data-tab="best-selling-product"]'));
