var Game = function() {
	this.turn = 1;
	this.currentTurn = "X";
}

Game.prototype.gameLoop = function(currentSelectedELement) {
	if((this.turn % 2) == 1) {
		this.currentTurn = "X";
	} else {
		this.currentTurn = "O";
	};

	currentSelectedELement.text(this.currentTurn);

	this.turn++;
	currentSelectedELement.off("click");
}

$(document).ready(function() {
	var ttt = new Game();

	$(".coloum").on("click", function() {
		ttt.gameLoop($(this));
	});
});