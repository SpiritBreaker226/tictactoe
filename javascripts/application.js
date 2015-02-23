$(document).ready(function() {
	var ttt = new Game();

	$(".coloum").on("click", function() {
		ttt.gameLoop($(this));
	});
});