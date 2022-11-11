let player = document.querySelector("button");
let audio = document.querySelector("#audio");

player.addEventListener("click", () => {
    if(player.innerHTML == 'play'){
        player.innerHTML = "pause";
        audio.src = `./nashida.mp3`
        audio.play()
    }else if(audio.src !== audio.play()){
        player.innerHTML = 'play'
        audio.pause()
    }
    
})


function paused(){
   audio.pause();

}
