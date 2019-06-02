let userscore=0;
let computerscore=0;
const userscore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getcomputerchoice(){
  const choices = ['rock','paper','scissors'];
  const randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}

function win(userchoice,computerchoice){
  userscore++;
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const userword = "user".fontsize(2).sup();
  const compword = "comp".fontsize(2).sup();
  result_div_p.innerHTML = `${userchoice}${userword}  beats  ${computerchoice}${compword} . you win`;
}

function lose(userchoice,computerchoice){
  computerscore++;
  computerscore_span.innerHTML = computerscore;
  userscore_span.innerHTML = userscore;
  const userword = "user".fontsize(2).sup();
  const compword = "comp".fontsize(2).sup();
  result_div_p.innerHTML = `${userchoice}${userword}  loses  ${computerchoice}${compword} . you lost`;
}

function draw(userchoice,computerchoice){
  const userword = "user".fontsize(2).sup();
  const compword = "comp".fontsize(2).sup();
  result_div_p.innerHTML = `${userchoice}${userword} matches ${computerchoice}${compword} . drawww`;
}

function game(userchoice){
  const computerchoice = getcomputerchoice();
  switch(userchoice + computerchoice ){
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userchoice,computerchoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userchoice,computerchoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userchoice,computerchoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', function() {
    game("rock");
  })

  paper_div.addEventListener('click', function() {
    game("paper");
  })

  scissors_div.addEventListener('click', function() {
    game("scissors");
  })
}

main();
