$('#arrow1').on('click', function(){
  $( "#active" ).addClass( "hidden" );
  $( "#active2" ).removeClass( "hidden" );
});

$('#arrow2').on('click', function(){
  $( "#active2" ).addClass( "hidden" );
  $( "#active" ).removeClass( "hidden" );
});

$('#arrow3').on('click', function(){
  $( "#active2" ).addClass( "hidden" );
  $( "#active3" ).removeClass( "hidden" );
});

$('#arrow4').on('click', function(){
  $( "#active3" ).addClass( "hidden" );
  $( "#active2" ).removeClass( "hidden" );
});
