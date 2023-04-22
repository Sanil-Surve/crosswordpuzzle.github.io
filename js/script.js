
(function($) {
	$(function() {
		const puzzleData = [
			 	{
					clue: "Defines the alpha-numeric characters that are typically associated with text used in programming",
					answer: "ascii",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Not a one ___ motor, but a three ___ motor",
					answer: "phase",
					position: 3,
					orientation: "across",
					startx: 7,
					starty: 1
				},
				{
					clue: "Created from a separation of charge",
					answer: "capacitance",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				// {
				// 	clue: "The speeds of engines without and accelaration",
				// 	answer: "idlespeeds",
				// 	position: 8,
				// 	orientation: "across",
				// 	startx: 1,
				// 	starty: 5
				// },
				{
					clue: "technique in which a function calls itself from within its own code",
					answer: "recursion",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 7
				},
				{
					clue: " conditional operator that takes three operands and evaluates to a value based on the value of the first operand,",
					answer: "ternary",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "It is used to store decimal numbers with a range of approximately 1.2E-38 to 3.4E+38 ",
					answer: "float",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "C programming language operator",
					answer: "cysan",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clue: "collection of homogeneous data items",
					answer: "array",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "which datatype use for storing a number?",
					answer: "int",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				// {
				// 	clue: "Control system strategy that tries to replicate the human through process (abbr.)",
				// 	answer: "ann",
				// 	position: 4,
				// 	orientation: "down",
				// 	startx: 9,
				// 	starty: 1
				// },
				// {
				// 	clue: "Greek variable that usually describes rotor positon",
				// 	answer: "theta",
				// 	position: 6,
				// 	orientation: "down",
				// 	startx: 7,
				// 	starty: 3
				// },
				{
					clue: "Electromagnetic (abbr.)",
					answer: "em",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					clue: "No. 13 across does this to a voltage",
					answer: "steps",
					position: 9,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: " in C programming is a user-defined data type that allows you to store different data types in the same memory location.",
					answer: "union",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "Information technology (abbr.)",
					answer: "it",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				// {
				// 	clue: "Asynchronous transfer mode (abbr.)",
				// 	answer: "atm",
				// 	position: 14,
				// 	orientation: "down",
				// 	startx: 3,
				// 	starty: 9
				// },
				// {
				// 	clue: "Offset current control (abbr.)",
				// 	answer: "occ",
				// 	position: 15,
				// 	orientation: "down",
				// 	startx: 7,
				// 	starty: 9
				// }
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
