

let btn = document.getElementById("alarm");
let time = document.getElementById("time");

btn.addEventListener("click", () => {
    console.log("click")
    localStorage.setItem("time", time.value)
    location.reload();
})
let tplay = localStorage.getItem("time");





document.getElementById("play").addEventListener("click", () => {
    document.querySelector(".text").innerHTML = `Your alarm will be play on ${tplay}`
})


let play;
setInterval(() => {

    var today = new Date();
    var time1 = today.getHours()
    var time2 = today.getMinutes()
    let tplayh = tplay.split(":");



    if (tplayh[1] == time2) {
        console.log("playing now")
        var audio = new Audio('https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3');
        audio.play()

    }
}, 30000);
