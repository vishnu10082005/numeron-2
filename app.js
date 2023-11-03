// Iteration 1: Making the play button in the index.html functional.
var btn=document.getElementById('play-button')
btn.addEventListener("click", btnclick)
function btnclick(){
    window.location.href="game.html"
}
// Description: When the play button is clicked the game.html page should be opened

///////or/////////
// var playbtn = document.getElementById("play-button")
// playbtn.onclick = () => {
//    window.location.href = "./game.html";
// }