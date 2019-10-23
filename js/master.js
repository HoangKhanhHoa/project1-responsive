window.onscroll = function () {
  var y = window.scrollY;
  var header = $('.js-header');
  var headerNav = $('.js-header-nav');
  if (y > 0) {
    header.addClass('header--stuck');
  } else if(y <= 0 && headerNav.css('display') !== 'block'){
    header.removeClass('header--stuck');
  }
};

// Hide/show input search

$('.js-search-button').click(function (e) {
  if($(window).width() > 992){
    var inputContainer = $('.js-input-container');
    if (inputContainer.hasClass('form-search__hidden')) {
      e.preventDefault();
      inputContainer.removeClass('form-search__hidden');
      inputContainer.find('.form-search__input').focus();
    }
  }
});

$('.js-close-button').click(function (e) {
  var inputContainer = $('.js-input-container');

  inputContainer.addClass('form-search__hidden');
});

$('body').click(function (e) {
  if($(window).width() > 992){
    var inputSearch = $('.js-input-search');
    var inputContainer = $('.js-input-container');
    if (!inputSearch.is(':focus')) {
      inputContainer.addClass('form-search__hidden');
    }
  }
});

// Carousel review

$('.js-review-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  speed: 600,
  autoplaySpeed: 8000,
  dots: true,
  appendDots: $('.js-review-control'),
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    return '<span class="custom-dots__item" role="button"></span>';
  }
});

// Responsive header

$('.js-button-collapse').click(function () {
  $('.js-header-nav').slideToggle(function () {
    if ($(this).css('display') == 'none') {
      $(this).removeAttr('style');
    }
  });

  $('.js-header-right').slideToggle(function () {
    if ($(this).css('display') == 'none') {
      $(this).removeAttr('style');
    }
  });

  if (!$('.js-header').hasClass('header--stuck')) {
    $('.js-header').addClass('header--stuck');
  }else if(window.scrollY <= 0){
    $('.js-header').removeClass('header--stuck');
  }
});

$('[data-dropdown]').click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).next().toggle(function(){
    if ($(this).css('display') == 'none') {
      $(this).removeAttr('style');
    }
  });
});
