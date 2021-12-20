// -----JS CODE-----
//@input Component.Image backgroundImage
//@input Asset.Texture staticRoad
//@input Asset.Texture dynamicRoad

script.backgroundImage.mainPass.baseTex = script.staticRoad;

script.api.OnPlay = function(){
    script.backgroundImage.mainPass.baseTex = script.dynamicRoad;
}