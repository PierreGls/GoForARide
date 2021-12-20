// -----JS CODE-----
//@input Component.ScriptComponent tweenObj
//@input int maxX = 3
//@input int minX = -3

// @ui {"widget":"separator"}
// @input bool DEBUG = false;

var CONST_POSY = -5.6;
var CONST_POSZ_START = 37;
var CONST_POSZ_END = 2;

script.api.resetRandomStartPosition = function()
{
    var randomPosX = getRandomPosX();

    var newStartPosition = new vec3(randomPosX, CONST_POSY, CONST_POSZ_START);
    var newEndPosition = new vec3(randomPosX, CONST_POSY, CONST_POSZ_END);
    
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

//Return an int between maxX and minX.
function getRandomPosX(){
    return Math.floor(Math.random() * (script.maxX - script.minX) + script.minX);;
}