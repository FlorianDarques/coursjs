// déclaration de variable 
let numberOfSeason = 2;
let numberOfEpisode = 10;
let episodeTime = 42;
let creditsTime = 5;
let globalEpisodeTime = episodeTime + creditsTime;
// calcul du temps global
let globalTimeSerie = (numberOfSeason * numberOfEpisode * globalEpisodeTime);
// console.log(globalTimeSerie);

let paragraph = document.querySelector("#info");
// paragraph.innerText = numberOfSeason;
// paragraph.style.backgroundColor = '#8A2BE2';

// créer un objet 

let myShow = {
    title: "Les anneaux de pouvoir",
    broadcaster: "Amazon",
    numberOfEpisode: 10,
    aired: false
};
let myShow2 = {
    title: "Breaking Bad",
    broadcaster: "EMC",
    numberOfEpisode: 60,
    aired: true
};
let myShow3 = {
    title: "Friends",
    broadcaster: "EMC",
    numberOfEpisode: 100,
    aired: true
};

// console.log(myShow);
let shows = [ myShow, myShow2, myShow3 ];
let empty = "";


for (let i = 0; i < shows.length; i++) {
    if(shows[i].aired===true) {
        empty = "oui";
    }
    else {
        empty = "non";
    }
    paragraph.innerHTML += "<strong>" + shows[i].title + "</strong>" + "<br>" + shows[i].broadcaster + "<br>" + shows[i].numberOfEpisode + "<br>" + empty + "<br> <br>"
};


let btnReveal = document.querySelector(".btnReveal");
let frame = document.querySelector(".series-frame");
let btnHide = document.querySelector(".btnHide");
// console.log(btnReveal);
// console.log(frame);

btnReveal.addEventListener("click", reveal);
function reveal(){
    frame.setAttribute("class", "reveal")
};

btnHide.addEventListener("click", hide);
function hide() {
    frame.setAttribute("class", "series-frame");
};

