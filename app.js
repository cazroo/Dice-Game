const i = document.getElementById("roll").addEventListener("click", rollResult())

const gameRedo = () =>{
  currentState = {};
  for (let key in defualtState){
    currentState[key] = defaultState[key];
  }
}

const rollResult = () =>{
  result = Math.floor(Math.random()*6)+1;
}

let diceImages = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png"
]

if(rollResult==1){
  document.getElementById("demo").innerHTML = "Sorry you rolled a 1 and so lose";
  document.getElementById("demo").innerHTML = diceImages[0];
  gameRedo();  
} else if (rollResult==2){
  document.getElementById("demo").innerHTML = diceImages[1];
} else if (rollResult==3){
  document.getElementById("demo").innerHTML = diceImages[2];
} else if (rollResult==4){
  document.getElementById("demo").innerHTML = diceImages[3];
} else if (rollResult==5){
  document.getElementById("demo").innerHTML = diceImages[4];
} else if (rollResult==6){
  document.getElementById("demo").innerHTML = diceImages[5];
}

let score = () =>{
  if (rollResult>=20){
    rollResult++;
  }
}


