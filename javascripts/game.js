var Game = function() {
	this.turn = 1;
}

Game.prototype.gameLoop = function(currentSelectedELement) {
	if((this.turn % 2) == 1) {
		currentSelectedELement.addClass("x");
	} else {
		currentSelectedELement.addClass("o");
	};
	
	this.turn++;
	currentSelectedELement.off("click");
}

$(document).ready(function() {
	var ttt = new Game();

	$(".coloum").on("click", function() {
		ttt.gameLoop($(this));
	});
});