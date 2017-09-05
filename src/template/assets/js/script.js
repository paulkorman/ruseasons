'use strict';

var windowWidth = $(window).width();
var windowHeight = $(window).height();

// Function Go To Section and slide
function goTo(anchor,slide){
  $.fn.fullpage.moveTo(anchor, slide);
}

$(document).ready(function() {

  $(window).on('load', function(){

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    //var svgobject = document.getElementById('svgmap'); // Находим тег <object>
    //if ('contentDocument' in svgobject) {              // У нас действительно там что-то есть?
    //  var svgdom = jQuery(svgobject.contentDocument);  // Получаем доступ к объектной модели SVG-файла
    //  // Теперь делаем свою работу, например:
    //  $("#45", svgdom).hover(function(){
    //    console.log('fff');
    //    $("#45 .wrap-mark", svgdom).css('display','block');
    //  });
    //  $("#45", svgdom).on('click',function(){
    //    console.log('ura');
    //  });  // Находим тег с id="figure1" в SVG DOM и заливаем его красным
    //}

    // Get the Object by ID
    //var a = document.getElementById("svgmap");
    //// Get the SVG document inside the Object tag
    //var svgDoc = a.contentDocument;
    //// Get one of the SVG items by ID;
    //var city = svgDoc.getElementsByClassName("city");
    //var wrapMark = svgDoc.getElementsByClassName("wrap-mark");
    //// Set the colour to something else
    //$(city).on('click',function(){
    //  var wrapMark = $(this).children(".wrap-mark");
    //  //$(wrapMark).addClass("visible");
    //  console.log($(this).children(".mark").attr("r"));
    //});

  });

  //change orientation and reload arter resize window
  var ratio = window.innerWidth/window.innerHeight;
  var orientation = ratio < 1 ? 'vertical' : 'horizontal';

  $(window).resize(function() {

    //window.setTimeout('location.reload()', 500);

    var resizeRatio = window.innerWidth/window.innerHeight;
    var resizeOrientation = resizeRatio < 1 ? 'vertical' : 'horizontal';

    if (resizeOrientation != orientation ) {
      location.reload();
    }


  });


  $('#header .show-menu-butt').on('click', function(){
    $('#wrap-main-menu').animate({
      right: 0
    }, 300, function() {

    });

  });

  $('#wrap-main-menu .close').on('click', function(){
    $('#wrap-main-menu').animate({
      right: -320
    }, 300, function() {

    });

  });

  //select lang mobile version

  $('.select-lang .current-lang').text($('.select-lang .active a').text());

  $('.select-lang .current-lang').on('click', function(){
    var h = $('.select-lang ul').css('height');
    h = parseInt(h, 10);
    $('.select-lang ul').animate({
      height: h > 0 ? 0 : '100px',
    }, 300, function(){});
  });

  $('body').click(function() {
    $('.select-lang ul').animate({
      height: 0,
    }, 300, function(){});;
  });

  $('.select-lang').click(function(event){
    event.stopPropagation();
  });

  $('#fullpage').fullpage({
    anchors: ['main-section', 'about-project', 'geographies', 'orgcommittee', 'program', 'news-1', 'news-2', 'gallery', 'partners', 'participants' ],
    navigation: true,
    navigationPosition: 'right',
    css3: true,
    slidesNavigation: true,
    menu: '#main-menu',
    verticalCentered: false,
    autoScrolling: false,
    fitToSection: false,
    onLeave: function(anchorLink, index){
      if(index == 1 || index == 7){

        $('#header .logo img').attr('src','template/assets/img/logo-dark.png');
        $('#rightbar .year-select').css('color','#ffffff');
        console.log(!$('#rightbar .langs a').hasClass('active'));
        $('#rightbar .langs a:not(.active)').css('color', '#ffffff');

      } else if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 8 || index == 9 || index == 10) {

        $('#header .logo img').attr('src','template/assets/img/logo-light.png');
        $('#rightbar .year-select').css('color','#9F8030');
        $('#rightbar .langs a:not(.active)').css('color', '##b41525');

      }
    },
    afterLoad: function(anchorLink, index){

      //using index
      //if(index == 3){
      //  $('.wrap-map').panzoom({
      //    disableZoom: true
      //  });
      //}

    }

  });

  $('.panzoom').panzoom({
    disableZoom: true,

    //contain: 'automatic'
  });

  $('.slider-1').bxSlider({
    minSlides: 1,
    maxSlides: 2,
    slideMargin: 0,
    slideWidth: 300,
    pager: false,
    nextSelector: '.slider-1-next',
    prevSelector: '.slider-1-prev',
    nextText: '',
    prevText: ''
  });

  $('.slider-2').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    //slideWidth: 300,
    pager: true,
    nextSelector: '.slider-2-next',
    prevSelector: '.slider-2-prev',
    nextText: '',
    prevText: ''
  });

  if(windowWidth >= 544) {
    $('.slider-2-1').bxSlider({
      minSlides: 2,
      maxSlides: 2,
      slideMargin: 0,
      slideWidth: 350,
      pager: true,
      nextSelector: '.slider-2-next',
      prevSelector: '.slider-2-prev',
      nextText: '',
      prevText: ''
    });
    $('.slider-4-1').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideMargin: 0,
      slideWidth: 550,
      pager: true,
      nextSelector: '.slider-4-next',
      prevSelector: '.slider-4-prev',
      nextText: '',
      prevText: ''
    });
    $('.slider-5').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideMargin: 0,
      slideWidth: 250,
      pager: false,
      nextSelector: '.slider-5-next',
      prevSelector: '.slider-5-prev',
      nextText: '',
      prevText: ''
    });
  } else {
    $('.slider-2-1').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideMargin: 0,
      slideWidth: 300,
      pager: true,
      nextSelector: '.slider-2-next',
      prevSelector: '.slider-2-prev',
      nextText: '',
      prevText: ''
    });
    $('.slider-4-1').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideMargin: 0,
      slideWidth: 300,
      pager: true,
      nextSelector: '.slider-4-next',
      prevSelector: '.slider-4-prev',
      nextText: '',
      prevText: ''
    });
    $('.slider-5').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideMargin: 0,
      slideWidth: 280,
      pager: false,
      nextSelector: '.slider-5-next',
      prevSelector: '.slider-5-prev',
      nextText: '',
      prevText: ''
    });
  }



  $('.slider-4').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    //slideWidth: 300,
    pager: true,
    nextSelector: '.slider-4-next',
    prevSelector: '.slider-4-prev',
    nextText: '',
    prevText: ''
  });



  $('.slider-5').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 0,
    slideWidth: 250,
    pager: false,
    nextSelector: '.slider-5-next',
    prevSelector: '.slider-5-prev',
    nextText: '',
    prevText: ''
  });

  var slider3 = $('.slider-3').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    slideWidth: 780,
    pager: true,
    pagerType: 'short',
    nextText: '',
    prevText: ''
  });



  $('#calendar').fullCalendar({
    locale: 'ru',
    header: {
      left:   'title',
      center: '',
      right:  'prev,next',
    },
    contentHeight: 500,
    events: [
      {
        title: 'Выставка Старые Мастера',
        start: '2017-09-11',
        end: '2017-09-13',
        color: '#63a031'
      },
      {
        title: 'Мастер-классы А.Я. Вагановой ',
        start: '2017-09-12',
        end: '2017-09-14',
        color: '#a08031'
      },
    ],
    //windowResize: function(view) {
    //  if ($(window).width() < 544){
    //    $('#calendar').fullCalendar( 'changeView', 'basicDay' );
    //  } else {
    //    $('#calendar').fullCalendar( 'changeView', 'month' );
    //  }
    //}
  });



  $('#gallery-img .wrap-img').on('click', function(e){
    $('#modal-gallery').modal('show');
  });

  $('#modal-gallery').on('shown.bs.modal', function (e) {
    slider3.reloadSlider();
    slider3.goToSlide(2);
  });


  $('.adout-link-js').on('click', function(e){
    goTo('about-project',1)
  });

  $('.news-link-js').on('click', function(e){
    goTo('news-1',1)
  });

  $('.program-link-js').on('click', function(e){
    goTo('program',1)
  });

  $('.photo-link-js').on('click', function(e){
    $('#modal-gallery').modal('show');
  });

  $('.news-backlink-js').on('click', function(e){
    goTo('news-1',1)
  });

  $('.news-backlink-js').on('click', function(e){
    goTo('news-1',1)
  });

  $('.news-1 .item').on('click', function(e){
    goTo('news-2',1)
  });

  $('.go-to-news-js').on('click', function(e){
    goTo('news-2',1)
  });

  // Map selection

  var selMap = '#' + $('.map-list-js li.active').attr('data-map');
  $(selMap).css('display','block');

  $('.map-list-js li').on('click', function(e) {
      selMap = '#' + $('.map-list-js li.active').attr('data-map');
      $(selMap).css('display','none');
      $('.map-list-js li.active').removeClass('active');

      $(this).addClass('active');
      selMap = '#' + $(this).attr('data-map');
      $(selMap).css({'display':'block', 'margin': 'auto'});
  });








});
