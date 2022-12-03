let play_button=document.getElementById("control-play");
let pause_button=document.getElementById("control-pause");



function play(){
pause_button.classList.remove('hide');
play_button.classList.add('hide');
audio.play();
background_color();
}

function pause(){
    audio.pause();
    background_color();
play_button.classList.remove('hide');
pause_button.classList.add('hide');
}


//background colors
let colors=['red','yellowgreen','greenyellow','cadetblue','deepskyblue','lightskyblue','palegreen','lightseagreen','violet']
let r=parseInt(Math.random()*9);
document.body.style.backgroundColor=colors[r];
function background_color(){
    r=parseInt(Math.random()*9);
    document.body.style.backgroundColor=colors[r];
}

