$(document).ready(function(){

$("form").on("submit", function() {
	var todoItem = $("#to-do-items").val();
	var checkBox = ('<input type="checkbox" id="check-it">');

	$(".to-do-list").append("<li>" + checkBox + " " + todoItem + " " + 
		"<button>X</button>" + "</li>");
});

$("ul").on("click", "#check-it", function() {
	$(this).parent().toggleClass("done");
});

$("ul").on("click", "button", function() {
	$(this).parent().remove();
});

});