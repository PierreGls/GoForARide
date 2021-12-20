// -----JS CODE-----
// @input SceneObject obstacle
// @input Component.ScriptComponent mvtObstacle
// @input Component.ScriptComponent randomStartPosition
// @input Component.ScriptComponent fadeOut
// @input Component.ScriptComponent fadeIn

// @ui {"widget":"separator"}
// @input SceneObject fbxObj

// @ui {"widget":"separator"}
// @input bool DEBUG = false;

    
script.api.startObstacleMovement = function()
{
    beforeMoveStart() ;
    script.mvtObstacle.api.startTween();
    endMoveStart() 
}

function beforeMoveStart() 
{
    if(script.DEBUG) {
        print("beforeMoveStart");
    }
    
    //Random start position
    resetStartPosition();
}

function endMoveStart() 
{
    if(script.DEBUG) {
        print("endMoveStart");
    }
    
    //Reset alpha to one
    script.fadeIn.api.startTween();
    
    //Fade Out with delay
    script.fadeOut.api.startTween();
}

function resetStartPosition(){
    //In case the fade in is running to soon 
    script.obstacle.getTransform().getWorldPosition = new vec3(-1000,0,0);
    
    //Set the random position
    script.randomStartPosition.api.resetRandomStartPosition();
}