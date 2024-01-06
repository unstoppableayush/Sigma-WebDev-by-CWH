console.log("let's play with javascript");

let currentSong = new Audio();
let songUl;
let currFolder;

//seconds to minute seconds conversion
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getSongs(folder){

    currFolder = folder;

    let b = await fetch(`http://127.0.0.1:3000/Project_2-SPOTIFY_CLONE/${currFolder}/`);

    let resposne = await b.text();

    // console.log(resposne);
    let div = document.createElement("div");
    div.innerHTML = resposne;
    let as = div.getElementsByTagName("a");

    let songs = [];
    for(let i= 0 ; i<as.length ; i++){
        const element = as[i];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${currFolder}/`)[1]);
        }
    }

    return songs;
}

const playMusic = (track , pause=false)=>{
    
    currentSong.src = `/Project_2-SPOTIFY_CLONE/${currFolder}/` + track;
    if(!pause){
        currentSong.play();
        play.src = "pause.svg";
    }

    document.querySelector(".songinfo").innerHTML=decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00.00";
}

async function main(){

    //get the list of all the songs
    let songs = await getSongs("songs/ncs");
    console.log(songs);
    playMusic(songs[0] ,true);

    //show all the songs in the playlist
    songUl = document.querySelector(".songList").getElementsByTagName("ul")[0];

    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `  <li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}</div>
            <div>Ayush</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="playsong.svg" alt="">
        </div>
    </li>` ;
    }

    //Attach an event listner to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click" , element =>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })
        
    })
    
    //Attach an envent listner to play , next and previous
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src = "pause.svg";
        }else{
            currentSong.pause();
            play.src="playsong.svg";
        }
    })

    //Listen for timeupdate event

    currentSong.addEventListener("timeupdate" , ()=>{

        // console.log(currentSong.currentTime ,currentSong.duration );
        document.querySelector(".songtime").innerHTML=`${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;

        document.querySelector(".circle").style.left = currentSong.currentTime / currentSong .duration * 100 +"%";

    })

    //Add an event listner to seekbar
    document.querySelector(".seekbar").addEventListener("click" , e=>{
        // console.log(e.offsetX , e.offsetY); 

        let timepercent = e.offsetX / e.target.getBoundingClientRect().width*100 ;

        document.querySelector(".circle").style.left = (e.offsetX / e.target.getBoundingClientRect().width *100)+"%";

        currentSong.currentTime = currentSong.duration * timepercent / 100 ;
    })

    //Add an event listner for hamburger
    
    document.querySelector(".hamburger").addEventListener("click" ,()=>{
        document.querySelector(".left").style.left = 0;
    })

    //Add an event listner for close button
    document.querySelector(".close").addEventListener("click" ,()=>{
        document.querySelector(".left").style.left = "-120%";
    })

    //Add an event listner to previous and next

    previous.addEventListener("click" , ()=>{
        currentSong.pause()
        console.log("previous");

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]); 
        if(index-1 >= 0)
        playMusic(songs[index-1])
    })

    next.addEventListener("click" , ()=>{
        currentSong.pause()
        console.log("next");

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        console.log(index);

        if(index+1 < songs.length)
        playMusic(songs[index+1])
    })

    //Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change" , (e)=>{
        console.log("setting value to",e.target.value);
        currentSong.volume =parseInt(e.target.value)/100;
    })

    //Load the playlist whenever card is clicked

    Array.from(document.getElementsByClassName("card")).forEach(e=>{
        console.log(e);
        e.addEventListener("click" ,async item=>{
            console.log(item.currentTarget.dataset);
            songs = await getSongs(`songs/${item.currentTarget.folder}`)
            
        })
    })

}
main();