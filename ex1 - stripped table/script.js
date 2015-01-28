$(document).ready(function(){



$("form").on("submit", function(e) {
// 	if ($("input[type=text]").val().length === 0) {
// 	e.preventDefault();
// } else {
	// var changeColor = $("#chgbkgcolor").val();
	$("tbody tr:nth-child(even), tfoot tr").css("background-color", $("#chgbkgcolor").val());

// }
});




});