let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#reset");
let msgc = document.querySelector(".msg-container");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector("#msg");

let turnO = true;

const winnpatt = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8]
]

boxes.forEach((box) => {
       box.addEventListener("click" , () => {
       if( turnO ){
         box.innerHTML = "O";
         turnO = false;
       } else {
         box.innerHTML = " X";
         turnO = true;
       }
       box.disabled = true;

       checkwinner();
       })
})

const newgames = () => {
  turnO = true;
  enablebox();
  msgc.classList.add("hide");
}

const enablebox = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const disableboxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

const showwinner = (winner) =>{
     msg.innerText = `congratulation winner is ${winner}`;
     msgc.classList.remove("hide");
     disableboxes();
}

const checkwinner = () =>{
    for (let pattern of winnpatt){
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      if( pos1 != "" && pos2 !="" && pos3!=""){
         if( pos1 === pos2 && pos2 === pos3){
            
          showwinner(pos1);
         }
      }
    }
}
newgame.addEventListener("click", newgames);
resetb.addEventListener("click",newgames);
