$(document).ready(function()  {
  $("form#user_info").submit(function(event) {
    alert("color");
    var color = $("input:radio[name=color]:checked").val();
    alert(color);
    var state = $("select#state").val();
    var fruit = $("select#fruit").val();

    if (color === "red") {
      $("#meryl").show();
    } else {
    }
  });
 
});