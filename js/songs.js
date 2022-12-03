
let tracks=[
    {
        song:"Polozhenie..",
        image:"images/poli.jpg",
        audio:"audio/Polozhenie-Remix(PagalWorld).mp3"
    },
    {
        song:"Night Changes ..",
        image:"images/night changes-image.jpg",
        audio:'audio/Night-Changes.mp3'
    },
    {
        song:"The Nights ...",
        image:'images/the nights.jpg',
        audio:"audio/The Nights.mp3" 
    },
    {
        song:"unstoppable ...",
        image:'images/unstoppable.jpg',
        audio:'audio/Unstoppable(PaglaSongs).mp3' 
    }
]

let e=0;
let n=tracks.length;
//set default audio
let audio=new Audio(tracks[0].audio);

//getting objects for image and name
let track_name=document.getElementById('track-name')
let track_image=document.getElementById('photo')



//set default song name
text()
function text(){
track_name.innerText=tracks[e].song;
}
//set default song image
photo()
function photo(){
track_image.src=tracks[e].image;
}

//time bar object

let bar=document.getElementById("progress-bar");

//for default song timer
audio.addEventListener('timeupdate',()=>{

    let progress=parseInt((audio.currentTime/audio.duration)*1000);
    bar.value=progress;
})

//play new song
function next(){
    e++;
    e=e%n;
    all_work();
}
function prev(){
    e--;
    if(e<0)e=n-1;
    all_work();
}

function all_work(){
    audio.load();
    audio=new Audio(tracks[e].audio);
    song_no();
    play();
    photo();
    text();

    //for each time new song played
    audio.addEventListener('timeupdate',()=>{
        let progress=parseInt((audio.currentTime/audio.duration)*1000);
    bar.value=progress;
    })
}




//set bar length
bar.style.width='80vw';

//event to change song with bar
bar.addEventListener('change' ,()=>{
    audio.currentTime=(bar.value*audio.duration)/1000;
})


//Song no

let track_no=document.getElementById("song-no");

    track_no.innerText='Playing  '+(e+1)+'  song of  '+n;
function song_no(){

    track_no.innerText='Playing  '+(e+1)+'  song of  '+n;
}

