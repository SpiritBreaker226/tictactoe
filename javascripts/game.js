var Game = function() {
	this.turn = 1;
	this.currentTurn = "X";
}

Game.prototype.gameLoop = function(currentSelectedELement) {
	var self = this;

	if((self.turn % 2) == 1) {
		self.currentTurn = "X";
	} else {
		self.currentTurn = "O";
	};

	currentSelectedELement.text(self.currentTurn);

	$("#currentTurnDisplay").text(self.currentTurn);
	self.turn++;

	// checks if the turn is at or after 6 rounds 
	// since before this it is more likly that either player would won
	if (self.turn >= 6 && self.hasWon()) {
		$(".gameboard").fadeOut({
			duration: 1000,
			complete: function(argument) {
				alert(self.currentTurn + " Has Won");
			}
		});
	} else if(self.turn === 10) {
		alert("Game is a Draw");
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
