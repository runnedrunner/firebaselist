var input = $("#new-item-input")
var clearButton = $("#clear-button")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("jacksList", valueToSave);
  }
})

clearButton.click(function(e) {	
  deleteValue("jacksList");
  $(".friends").remove();
})

onNewListItem("jacksList", function(value) {
  $("#list-display").append("<div class='friends'>" + value + "</div>")
}) 