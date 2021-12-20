// -----JS CODE-----
//@input Component.ScriptComponent[] obstaclesMvtController
//@input float spawnRate = 2
//@input float spawnRateIncrement = 0.1
//@input float minSpawnRateIncrement = 0.1

// @ui {"widget":"separator"}
//@input Component.ScriptComponent scoreController
//@input Component.ScriptComponent soundController
//@input Component.ScriptComponent roadAnimation

// @ui {"widget":"separator"}
//@input bool DEBUG = false

var hasStart = false;

script.api.startGame = function()
{
    if(hasStart) { return; }  
    
    if(script.DEBUG == true){
        print("Start Game!");
    }
    
    hasStart = true;
    mustSpawn = true;
    script.soundController.api.OnPlay();
    script.roadAnimation.api.OnPlay();
}


//--------------Spawn-------------//
var nbrObstacles = script.obstaclesMvtController.length;
var counterObstacles = 0;

function onSpawn(){
    var obstacle = script.obstaclesMvtController[counterObstacles];
    obstacle.api.startObstacleMovement();
    
    if(script.DEBUG == true){
        print("obstacle " 
            + obstacle 
            + " - " + obstacle.getTypeName
            );
    }
    
    incrementCounter();
    incrementSpawnRate();
    updateScore();
}

//Increment index of the obstacle to run
function incrementCounter(){
    counterObstacles++;
    counterObstacles = counterObstacles%nbrObstacles;
    
    if(script.DEBUG == true){
        print("Counter " + counterObstacles);
    }
}

//Increment spawn rate to be faster
function incrementSpawnRate(){
    script.spawnRate -= script.spawnRateIncrement;
    
    if(script.spawnRate < script.minSpawnRateIncrement){
        script.spawnRate = script.minSpawnRateIncrement;
    }
    
    if(script.DEBUG == true){
        print("spawnRate " + script.spawnRate);
    }
}

//Update score text
function updateScore(){
    script.scoreController.api.OnScoreChange(1);
}

//Wait script.spawnRate and set mustSpawn to true
var delayedEvent = script.createEvent("DelayedCallbackEvent");
function resetMustSpawn(){
    
    delayedEvent.bind(function(eventData)
    {
        mustSpawn = true;
    });
    delayedEvent.reset(script.spawnRate);
}

//--------------GameOver-------------//
var isGameOver = false
script.api.OnGameOver = function(){
    isGameOver = true;
}

//--------------Update-------------//
var mustSpawn = false;
function onUpdate(){
    if(isGameOver){return;}
    if(!mustSpawn){return;}
    
    mustSpawn = false;
    resetMustSpawn()
    
    onSpawn();
}

//--------------EventsListeners-------------//
var updateEvent = script.createEvent( "UpdateEvent" );
updateEvent.bind( onUpdate );