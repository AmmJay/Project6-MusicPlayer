console.log("Welcome to Musings");

//Initialise the variables
let songIndex = 1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName: "Unison Aperture NCS",filePath:"songs/1.mp3", coverPath : "images/1.jfif"},
    {songName: "Aao Milo Chale- Jab We Met",filePath:"songs/2.mp3", coverPath : "images/2.jpeg"},
    {songName: "Nagada Sang Dhol - RamLeela",filePath:"songs/3.mp3", coverPath : "images/3.jpg"},
    {songName: "Let Me Love You-Justin Bieber",filePath:"songs/4.mp3", coverPath : "images/4.jpg"},
    {songName: "Who Says-Selena Gomez",filePath:"songs/5.mp3", coverPath : "images/5.jpg"}
]

songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element =>{
            //console.log(element.target)
            //console.log(element.getElementsByTagName("path"));
            element.getElementsByTagName('path')[1].setAttribute('d',"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z");
})
}

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.style.display="none";
        masterPause.style.display="inline";  
        gif.style.opacity=1;  
        document.getElementById(`${songIndex}`).getElementsByTagName('path')[1].setAttribute('d',"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z");

    }
})

masterPause.addEventListener('click',()=>{
        audioElement.pause();
        masterPlay.style.display="inline";
        masterPause.style.display="none";
        gif.style.opacity=0;
        makeAllPlays();
        document.getElementById(`${songIndex}`).getElementsByTagName('path')[1].setAttribute('d',"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z");

    })

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //seekbar update
    progress = (audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) /100;
})



Array.from(document.getElementsByClassName('songItemPlay')).forEach(element =>{
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       //console.log(e.target);
        //console.log(e.target.getElementsByTagName("path")[1].getAttribute('d'));
        songIndex = parseInt(e.target.id);
        //e.target.classList.remove('songItemPlay');
        
        e.target.getElementsByTagName('path')[1].setAttribute('d',"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z");
        audioElement.src= `songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex-1].songName;
        gif.style.opacity=1;
        masterPlay.style.display="none";
        masterPause.style.display="inline";
    })
})

/*document.getElementsByClassName('songItemPause').addEventListener('click',()=>{
        makeAllPlays();
        audioElement.pause();
        element.target.classList.remove('songItemPause');
    })
*/

/*Array.from(document.getElementsByClassName('songItemPause')).forEach(element =>{
    element.addEventListener('click',(e)=>{
        console.log("I am Working");
       makeAllPlays();
       //console.log(e.target);
        //console.log(e.target.getElementsByTagName("path")[1].getAttribute('d'));
        //songIndex = parseInt(e.target.id);
       // e.target.classList.remove('songItemPlay');
        e.target.classList.remove('songItemPause');
        e.target.getElementsByTagName('path')[1].setAttribute('d',"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z");
        //audioElement.src= `songs/${songIndex}.mp3`;
        //audioElement.currentTime=0;
        audioElement.pause();
        //masterSongName.innerText=songs[songIndex-1].songName;
        gif.style.opacity=0;
        masterPlay.style.display="inline";
        masterPause.style.display="play";

    })
})*/

document.getElementById('next').addEventListener('click',()=>{
    console.log(songIndex)
    if(songIndex==5)
    songIndex=1;

    else
    songIndex+=1;
    makeAllPlays();
    document.getElementById(`${songIndex}`).getElementsByTagName('path')[1].setAttribute('d',"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z");
    audioElement.src= `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPlay.style.display="none";
    masterPause.style.display="inline";
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex==1)
    songIndex=5;

    else
    songIndex-=1;
    makeAllPlays();
    document.getElementById(`${songIndex}`).getElementsByTagName('path')[1].setAttribute('d',"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z");
    audioElement.src= `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPlay.style.display="none";
    masterPause.style.display="inline";
    
})