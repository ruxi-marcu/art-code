$('#send').on('click', function(e) {
  e.preventDefault();
  subject = $('#subject').val();
  body = $('#body').val();
  window.location = "mailto:ruxi.marcu@gmail.com.com?subject=" + subject + "&body=" + body;
});