const arr = [
    {songName : "Ramuloo Ramulaa",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/1.mp3",
    songDuration : "0:00"},
    {songName : "Afgan Jalebi",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/2.mp3",
    songDuration : "0:00"},
    {songName : "Assi Chutki ",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/3.mp3",
    songDuration : "0:00"},
    {songName : "Bolo Har Har",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/4.mp3",
    songDuration : "0:00"},
    {songName : "Kalki Theme Song",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/5.mp3",
    songDuration : "0:00"},
    {songName : "Mast Punjabi",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/6.mp3",
    songDuration : "0:00"},
    {songName : "Oh_HO_OH_HO",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/7.mp3",
    songDuration : "0:00"},
    {songName : "pirates of Carabien",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/8.mp3",
    songDuration : "0:00"},
    {songName : "Saat Samundar",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/9.mp3",
    songDuration : "0:00"},
    {songName : "Shiv atndav strotam",
     songImage : "./songImage/cover.jpg",
    somgPath : "./songs/10.m4a",
    songDuration : "0:00"},
]



let taskbar = document.querySelector("#progress-bar")
let audioElement = new Audio("./songs/1.mp3")
// UPDATE CURRENT TIME OF SONG
audioElement.addEventListener("timeupdate", ()=>{
    taskbar.value = (audioElement.currentTime / audioElement.duration)*100
})
// UPDATE TASKBAR ACCORDING TO SONG DURATION
taskbar.addEventListener("change", ()=>{
    audioElement.currentTime = (taskbar.value * audioElement.duration)/100
} )




// CHANGING THE SONG ON CLICKING ON OTHER SONG IN LIST
let songcount = 0
let songitem = document.querySelectorAll(".songitem")
let audElem
const isPlaying = (audElem) => {
    if(!audElem.paused){
        return true
    }
    else{
        return false
    }
  };

const makeallplay = ()=>{
    let play = document.querySelectorAll(".loadImg")
    Array.from(play).forEach((ply, index1)=>{
        ply.innerHTML = "&#9654;"
    })
}

songitem.forEach((ele, index)=>{
    ele.querySelector("h4").innerHTML = arr[index].songName
    ele.onclick = ()=>{
        document.querySelector(".song-name").innerHTML = arr[index].songName
            makeallplay();
            document.querySelectorAll(".loadImg")[index].innerHTML = " <b>|| </b>"
            songcount = index
            button.innerHTML = " <b>|| </b>"
            audioElement.src = arr[index].somgPath
            audioElement.play()
       
        

    } 
    ele.addEventListener("timeupdate", ()=>{
        ele.querySelector("p").innerText = audioElement.currentTime
    })
})

// MAKING PREVIOUS AND NEXT BUTTON FUNCTION

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")


prev.onclick = ()=>{
    if(songcount>0 && songcount < arr.length){
    audioElement.src = arr[songcount-1].somgPath
    audioElement.play()
}
else{
    alert("No previous Song in list")
}
}

next.onclick = ()=>{
    if( songcount <= arr.length){
    audioElement.src = arr[songcount+1].somgPath
    audioElement.play()
}
else{
    alert("No Next Song in list")
}
}

let button = document.querySelector(".masterButton")
button.addEventListener("click", ()=>{
    if(audioElement.paused){
        document.querySelectorAll(".loadImg")[songcount].innerHTML = " <b>|| </b>"
        button.innerHTML = " <b>|| </b>"
        audioElement.play()
    }
    else{
        makeallplay()
        audioElement.pause()
        button.innerHTML = "&#9654;"
    }
})
  