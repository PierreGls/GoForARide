// -----JS CODE-----
//@input Component.ScriptComponent tweenObj
//@input int maxX = 3
//@input int minX = -3

// @ui {"widget":"separator"}
// @input bool DEBUG = false;

script.api.resetRandomStartPosition = function()
{
    var randomPosX = getRandomPosX();

    var newStartPosition = new vec3(randomPosX, -5.6, 37);
    var newEndPosition = new vec3(randomPosX, -5.6, 2);
    
    var tweenComponent = script.tweenObj;
    
    if(tweenComponent == null){
        print("TWEEN NULL");
        return;
    }
    
    tweenComponent.start = (newStartPosition);
    tweenComponent.end = (newEndPosition);
    
    
    if(script.DEBUG) {
        print("randomPosX : " + randomPosX);
    }
}

//Return a number between maxX and minX.
function getRandomPosX(){
    return Math.floor(Math.random() * (script.maxX - script.minX) + script.minX);;
}