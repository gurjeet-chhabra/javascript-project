let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user");
const comsco = document.querySelector("#computer");


const showwinner = (userwin) => {
   if (userwin){
    userscore++;
    userscorep.innerText = userscore;
    msg.innerText = "you win!";
    msg.style.backgroundColor = "green";
   } else {
    compscore++;
    comsco.innerText = compscore;
    msg.innerText = "you lose";
    msg.style.backgroundColor = "red"
   }
};

const compchoice = () => {
    const options = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
}

const draw = () => {
    msg.innerText = " game was draw. play again";
    msg.style.backgroundColor = "blue";
};

const playgame = (userchoice) => {
   const compch = compchoice();

   if ( userchoice === compch ){
           draw();
   } else {
      let userwin = true;
      if( userchoice ==="rock"){
        userwin = compch === "paper" ? false : true;
      } else if (userchoice === "paper"){
        userwin = compch === "scissors" ? false :true; 
      } else {
        userwin = compch === "rock" ? false :true
      }
      showwinner(userwin);
   }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})