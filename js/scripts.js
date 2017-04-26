//User-Interface Logic
$(document).ready(function(){
  $("form#main").submit(function(event){
    event.preventDefault();
    var confirm = $("input#name1").val() + "<br>" + $("input#date-time1").val() + "<br>" + $("input#date-time1").val() + "<br>" + $("input#date-time1").val() + "<br>" + $("input#date-time1").val();
    $("#output").append(confirm);
  });
});
