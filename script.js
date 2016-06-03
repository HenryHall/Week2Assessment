$(document).ready(function(){

  var generateCounter = 0;

  $('#generateButton').click(function() {
    generateCounter++;
    $(this).parent().append("<div  id='div" + generateCounter + "'></div>");
    $('#div'+generateCounter).append("<button class='change' id='buttonChange" + generateCounter + "' value = 'yellow'>Change Color</button>");
    $('#div'+generateCounter).append("<button class='delete' id='buttonDelete" + generateCounter + "'>Delete Div</button>");
    $('#div'+generateCounter).append("<p id='paragraph" + generateCounter + "'>This is div" + generateCounter + "!</button>");

    $('#buttonChange' + generateCounter).click(function() {
      if (this.value == "yellow") {
        $(this).parent().css("background-color", "#994040");
        this.value = "red";
      } else {
        $(this).parent().css("background-color", "#FFFF40");
        this.value = "yellow";
      }
    });

    $('#buttonDelete' + generateCounter).click(function() {
      $(this).parent().remove();
    });

  });

});
