$(document).ready(function (){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
$( function() {
    $( "#datepicker" ).datepicker();
  } );

$('#submit').click(function(){
    var title = $('#title').val();
    var description = $('#description').val();
    var datepicker = $('#datepicker').val();
    if(title === "" || description === "" || datepicker === ""){
        return false;
    }
    var you_task = "<div class='tk' draggable='true' ondragstart='drag(event)' id='drag1'><div class='task_header'>"+ title +"</div><div class='task_description'>"+ description +"</div><div class='task_datepicker'>"+ datepicker +"</div></div>";
    
    $('#Pending').append(you_task);
    
    var title = $('#title').val("");
    var description = $('#description').val("");
    var datepicker = $('#datepicker').val("");


$(function () {
  $(".tk").draggable();
  });
	
});



