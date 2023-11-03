// Iteration 8: Making scoreboard functional
let scoreboard = document.getElementById("score-board")
// console.log(window.location.search)
let params = new URLSearchParams(document.location.search);
let score = params.get("score")
console.log("score:", score)
scoreboard.textContent = score;
//play again btn access.
let playagainbtn = document.getElementById("play-again-button")
playagainbtn.onclick = () => {
    window.location.href = "./game.html";
}