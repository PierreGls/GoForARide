// -----JS CODE-----
// @input Component.Text scoreText 

var score = 0;
var CONST_SCORE_TEXT = "SCORE: ";

//Update on start
updateText();

script.api.OnScoreChange = function(addToScore){
    score += addToScore;
    updateText();
}
    
function updateText(){
    script.scoreText.text = CONST_SCORE_TEXT + score.toString();
}