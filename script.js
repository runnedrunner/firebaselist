var input = $("#new-item-input")
var clearButton = $("#clear-button")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("jackslist", valueToSave);
  }
})

clearButton.click(function(e) {	
  deleteValue("jackslist");
  $(".friends").remove();
})

onNewListItem("jackslist", function(value) {
  $("#list-display").append("<div class='friends'>" + value + "</div>")
}) 