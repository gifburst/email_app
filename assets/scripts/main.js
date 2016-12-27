$(document).ready(function() {

// sat
var newDate = new Date();

setInterval( function() {
  var minutes = new Date().getMinutes();
  $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

setInterval( function() {
  var hours = new Date().getHours();
  $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);

    // toggle boje .star
    $('.star .fa-star').on('click', function() {
    $(this).toggleClass('clicked');
  });

  $('.dropdwn-btn').on('click',function(){
  	$(this).children().toggleClass('show');
  });

  $(function() {
    $(".close-btn").click(function() {
      $('#email-view').hide(400);
    });
  });

  $("#inbox-list table tbody tr td:not(.check, .star)").click(function() {
    $('#email-view').show(400);
});
});
