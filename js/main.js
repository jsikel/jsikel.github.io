jQuery(document).ready(function($) {
  $('.editor').show();
  $('.editor.python').each(function(index, element) {
    var editor = ace.edit(element);
    editor.setOptions({
      maxLines: Infinity
    });
    editor.setTheme('ace/theme/promo');
    editor.setFontSize(26);
    editor.setReadOnly(true);
    editor.setShowPrintMargin(false);
    editor.setHighlightActiveLine(false);
    editor.setHighlightGutterLine(false);
    editor.setShowFoldWidgets(false);
    editor.getSession().setMode('ace/mode/python');
    $(element).css('height', editor.getSession().getScreenLength() *
      editor.renderer.lineHeight + 2);
  });

  $('.promo h2').fitText(1.6, {minFontSize: '30px'});
  $('.promo p').fitText(3.2, {minFontSize: '26px'});
  $('.promo .editor').fitText(2.8);
  $('.btn').fitText(1);

  $('a.scrollto').on('click', function(evt){
    var target = this.hash;
    if (!$(target).length) {
      return;
    }
    evt.preventDefault();
    $('body').stop(true);
    $('body').scrollTo(target, 800, {}, {easing: 'easeOutQuad'});
    if ($('.navbar-collapse').hasClass('in')) {
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });
  $('.navbar-toggle').on('click', function(evt) {
    var scrollTop = $(window).scrollTop();
    if ($('.navbar-collapse').hasClass('in') &&
        scrollTop <= 0 && $('.promo').length) {
      $('.navbar').addClass('navbar-big');
    }
    else {
      $('.navbar').removeClass('navbar-big');
    }
  });
  $('a[href^="#"]').on('click', function(evt) {
      evt.preventDefault();
      $('html, body').stop().animate({
          'scrollTop': $(this.hash).offset().top - 10
      }, 750, 'swing', function() {
          window.location.hash = this.hash;
      }.bind(this));
  });

  var onScroll = function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop <= 0 && $('.promo').length &&
        !$('.navbar-collapse').hasClass('in')) {
      $('.navbar').addClass('navbar-big');
    }
    else if ($('.navbar').css('position') !== 'absolute') {
      $('.navbar').removeClass('navbar-big');
    }
  }
  $(window).scroll(onScroll);
  onScroll();
});
