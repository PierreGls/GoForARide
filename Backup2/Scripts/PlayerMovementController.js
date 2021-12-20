// -----JS CODE-----
//@input Component.Head headBinding
//@input Component.Camera camera
//@input SceneObject sensor
//@input float sensorZ = 25
//@input float sensorY = -5
//@input float thresholdHeadMovement = 0.1f

//Landmark in the middle of the forehead
var CONST_FACE_LANDMARK_INDEX = 27;
var isFaceTracking = false;

function onUpdate(){
    if(!isFaceTracking)
    {
       return;
    }
    
    var landMarkPosition = script.headBinding.getLandmark(CONST_FACE_LANDMARK_INDEX);
    
    //When out of bound
    if(landMarkPosition.x < script.thresholdHeadMovement){
        landMarkPosition.x = script.thresholdHeadMovement;
    }
    else if(landMarkPosition.x > 1 - script.thresholdHeadMovement){
        landMarkPosition.x = 1 - script.thresholdHeadMovement;
    }
    
    var sensorPosition = script.camera.screenSpaceToWorldSpace(landMarkPosition, script.sensorZ);
    sensorPosition.y =  script.sensorY;
    script.sensor.getTransform().setWorldPosition(sensorPosition);
}

function onFaceFound()
{
   isFaceTracking = true;
}
function onFaceLost()
{
   isFaceTracking = false;
}

var faceFoundEvent = script.createEvent("FaceFoundEvent");
faceFoundEvent.bind(onFaceFound);
var faceLostEvent = script.createEvent("FaceLostEvent");
faceLostEvent.bind(onFaceLost);
var updateEvent = script.createEvent( "UpdateEvent" );
updateEvent.bind( onUpdate );