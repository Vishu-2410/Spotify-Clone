console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioELement = new Audio('spotifysong0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName : "let me love u" , filePath: "spotifysong1.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Na-Chaiye-TumseJyada-Tumse-Kam-Nahi" , filePath: "spotifysong1.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Enna-Soa-Kyu-Rab-Ne-Banaya" , filePath: "spotifysong2.mp3", coverPath: "spotify img2.jpg"},
    {songName : "I-Can-See-You" , filePath: "spotifysong3.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Sanam-Teri-Kasam" , filePath: "spotifysong4.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Kabhi-Yaad-Kare-Jo-Zamana" , filePath: "spotifysong5.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Jo-Bheji-Thi-Dua" , filePath: "spotifysong6.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Dhundle-Hue-Hai-Manzar-Mere" , filePath: "spotifysong7.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Na-Chaiye-TumseJyada-Tumse-Kam-Nahi" , filePath: "spotifysong8.mp3", coverPath: "spotify img2.jpg"},
    {songName : "Dhalti-Raat-Ka-Musafir" , filePath: "spotifysong9.mp3", coverPath: "spotify img2.jpg"}
]

songItems.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioELement.play();


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioELement.paused || audioELement.currentTime<=0){
        audioELement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;    }
    else{
        audioELement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to event
audioELement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
     //update seekbar
     progress = parseInt((audioELement.currentTime/audioELement.duration)*100);
    //  console.log(progress);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioELement.currentTime = myProgressBar.value * audioELement.duration/100;
})

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioELement.src=`spotifysong${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioELement.currentTime=0;
        audioELement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioELement.src=`spotifysong${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioELement.currentTime=0;
    audioELement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioELement.src=`spotifysong${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioELement.currentTime=0;
    audioELement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})