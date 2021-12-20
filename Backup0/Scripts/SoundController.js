// -----JS CODE-----
//@input Component.AudioComponent backgroundAudio
//@input Component.AudioComponent crash

script.api.OnPlay = function(){
    script.backgroundAudio.play(-1);
}

script.api.OnGameOver = function(){
    script.backgroundAudio.pause();
    script.crash.play(1);
}