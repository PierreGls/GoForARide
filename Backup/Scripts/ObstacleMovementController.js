// -----JS CODE-----
// @input SceneObject movementObstacle
// @input Component.ScriptComponent mvtObstacle
// @input Component.ScriptComponent randomStartPosition
// @input Component.ScriptComponent fadeOut
// @input SceneObject fbx

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
    
    //Reset alpha
    resetAlpha();

    //Random start position
    resetStartPosition();
}

function endMoveStart() 
{
    if(script.DEBUG) {
        print("endMoveStart");
    }
    
    //Fade Out
    script.fadeOut.api.startTween();
}

function resetStartPosition(){
    script.randomStartPosition.api.resetRandomStartPosition();
}

    
function resetAlpha(){

    var alphaOne = script.fbx.getMaterial(0).getPass(0).baseColor;
    alphaOne.a = 1;
    script.fbx.getMaterial(0).getPass(0).baseColor = alphaOne;
    /*
    for(var i = 0; i < script.fbx.getChildrenCount; i++){
        print("i : " + i + " - " + script.fbx.getChild(i));
        
        var alphaOne = script.fbx.getChild(i).getMaterial(0).getPass(0).baseColor;
        alphaOne.a = 1;
        script.fbx.getChild(i).getMaterial(0).getPass(0).baseColor = alphaOne;  
    }
    */
    
    
}