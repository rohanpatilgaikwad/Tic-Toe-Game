let boxes = document.querySelectorAll(".box");
let resestbtn = document.querySelector("#reset-btn");
let msgCon= document.querySelector(".msg-container")
let newGame =document.querySelector("#new-game-btn");
let msg = document.querySelector(".msg")

let turnO = true;

let winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
/** After Click */
boxes.forEach((box)=>{
    box.addEventListener("click",(evt)=>{
        if(turnO === true){
            box.innerText="O"
            turnO =false;
           
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true; // this is for not click Again on same btn
        checkWinner();
    })
})

/**After Won */
const Won = ((winner)=>{
msg.innerText=`🎊Congrats The Winner Is 🎉${winner}`
msgCon.classList.remove("hide");
resestbtn.innerText="New Game";
disableBtns();


})

/**After Win Not To Work The btns */
const disableBtns = ()=>{
    for(let btn of boxes){
        btn.disabled=true;
    }
}

/******** */



/**Checking Winner  */
const checkWinner =(()=>{
    for( let pattern of winpatterns){

        let pos1=  boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]] .innerText;
        let=pos3=  boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" &&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                Won(pos1);

                console.log("Won")
            } 
            
        }
    }
})
  const startAgain  = ()=>{
    boxes.forEach((box)=>{
        box.innerText=""
        box.disabled=false;
        msgCon.classList.add("hide");
        resestbtn.innerText="Reset Game";
    })
  }
   
resestbtn.addEventListener("click",()=>{startAgain()});
newGame.addEventListener("click",()=>startAgain());
