$(function() {
  autosize($('.js-markdown'));
});

$(document).on('keyup', '.js-markdown', function() {
  preview = marked(this.value, { 
    gfm: true,
    breaks: true
  });
  $('.js-preview').html(preview);
});

$(document).on('click', '.js-save', function() {
  $('.js-flash-clear').hide(); 
  $('.js-flash-save').fadeIn(); 
});

$(document).on('click', '.js-clear', function() {
  $('.js-markdown').val('');
  $('.js-preview').html('');

  $('.js-flash-save').hide(); 
  $('.js-flash-clear').fadeIn(); 
});

$(document).on('click', '.js-flash-close', function() {
  $(this).parents('.flash').fadeOut();
});

