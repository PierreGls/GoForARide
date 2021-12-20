// -----JS CODE-----
//@input Component.ScriptComponent spawnController
//@input Component.ScriptComponent soundController

// @ui {"widget":"separator"}
//@input SceneObject gameOverObject
var isGameOver = false
script.api.OnGameOver = function(){
    isGameOver = true;
    script.spawnController.api.OnGameOver();
    script.soundController.api.OnGameOver();
    script.gameOverObject.enabled = true;
}