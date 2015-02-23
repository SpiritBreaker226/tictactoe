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

	// checks if the turn is at or after 6 rounds 
	// since before this it is more likly that either player would won
	if (this.turn >= 6 && this.hasWon()) {
		alert(this.currentTurn + " Has Won");

		$(".coloum").off("click");
	} else {
		currentSelectedELement.off("click");
	};
}

Game.prototype.hasWon = function() {
		var possibleWins = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
			[1, 5, 9],
			[3, 5, 7]
		];
		
		for (var i = 0; i < possibleWins.length; i++) {
			if($("#" + possibleWins[i][0]).text() === this.currentTurn && 
				$("#" + possibleWins[i][1]).text() === this.currentTurn && 
				$("#" + possibleWins[i][2]).text() === this.currentTurn) {
				return true;
			}
		};

		return false;
}

$(document).ready(function() {
	var ttt = new Game();

	$(".coloum").on("click", function() {
		ttt.gameLoop($(this));
	});
});