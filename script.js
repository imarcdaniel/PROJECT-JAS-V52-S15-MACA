/*----- constants -----*/

/*----- app's state (variables) -----*/
let playerTurn;
let gameBoard;
let gridOfPits = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];

/*----- cached element references -----*/
let boardDataEl = document.getElementById("mancala-board");
let pits = Array.from(document.querySelectorAll("#mancala-board div .cell"));
let messageEl = document.getElementById('message')
let turn = document.getElementsByClassName("turn")

/*----- event listeners -----*/
boardDataEl.addEventListener("click", handleclick);

/*----- functions -----*/

// Functions that load the game to blank state

function init() {
  playerTurn = "A";
  // Object and arrays containing all positions
  gridOfPits = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
}

// Function creating a button to restart the game
function Creatbutton() {
  let button = document.createElement("button");
  button.innerHTML = "Restart Game";
  let body = document.getElementsByTagName("h2")[0];
  body.appendChild(button);
  button.onclick = init()
}
// function informing players  who's turn is it
function CreatePlayerTurn() {
  let turn = document.createElement("div");
  // turn.innerHTML = "its Player : " + playerTurn + " to play";
  let body = document.getElementsByTagName("main")[0];
  body.appendChild(turn);
  turn.classList.add("turn");
}

// autoload to render board-game ready


Creatbutton();
CreatePlayerTurn();

/*----- ACTIONS-----*/

function handleclick(evt) {
  // gather position clicked
  // transform in coordinates
  let clickedCell = parseClass(evt.target.className);
  console.log(clickedCell);
  if (clickedCell.bgA === 6 || clickedCell.bgA === 13) return;
  
  let player = clickedCell.plyr
  console.log(player)
  
  //distribute stones to the next pit
  stoneDistribution(clickedCell);

  // switch to other player
  togglePlayer(player);

  // Make visible the event done by the click
  render();
// verify if there is a winner
  checkWin()
  document.querySelector(".turn").innerHTML = "its Player : " + player + " to play";
}

// give a clicked div a coordinate classname to decode position and coordinates of the click
function parseClass(className) {
  let gatheredClass = className.split("-");
  return {
    plyr: gatheredClass[0].slice(-1),
    bgA: parseInt(gatheredClass[1]),
    smA: parseInt(gatheredClass[2]),
  };
}

// toggle the turn from one player to the other arrays by players
function togglePlayer(player) {
  if (player === "A") {
        player === "B";
  } else {
    player === "A";
  }
}

// Renderthe board as the position of the arrays

function render() {
  gridOfPits.forEach(function (mark, index) {
    pits[index].innerHTML = mark;
  });
}
//ICEBOX

// *******To prevent the other player to play in certain pits.
//function validMove (clickedCell) {
//   if ( playerTurn === playerPitsClicked && index >= 0 && index <= 5 && gridOfPits[index] > 0 )
//   {  console.log('B valid move')}
//   return true;
// }

function stoneDistribution(clickedCell) {
  let index = clickedCell.bgA;
  console.log("index", index);

  let playerPitsClicked = clickedCell.plyr;
  let numberOfStones = gridOfPits[index];

  gridOfPits[index] = 0;
  gridOfPits.lenght = 14;
  if (!index === 6 || !index === 13) return;

  // _____
  for (let i = numberOfStones; i > 0; i--) {
        // Increment by 1 for next pit

    if (index === 6 && playerPitsClicked !== playerTurn) {
      index = 7;
    }
    if (index === 13) {
      index = 0;
    }

    //****ICEBOX
    //  if (playerTurn !== playerPitsClicked) {
    //   alert("not your turn");
    // }

    if (index < 7) {
      gridOfPits[1 + index++] += 1;
      console.log(index);
      console.log("bactrak", gridOfPits);
      
    } else if (index <= 14 && index >= 7) {
      gridOfPits[1 + index++] += 1;

      console.log("donde", gridOfPits);
    }
  }
}


// FUNCTION THAT EVALUATE WIN / LOSE

function checkWin () {
let gridforSplice =[...gridOfPits]
let gridplayerA=gridforSplice.slice(0, 6)
let gridplayerB=gridforSplice.slice(7, 13)
let totalPlayerA = gridplayerA.reduce(function(sum, value) {
  return sum + value;
  }, 0);   
  let totalPlayerB = gridplayerB.reduce(function(sum, value) {
    return sum + value;
    }, 0);   
  if (totalPlayerA=== 0 || totalPlayerB=== 0) { 

    messageEl.textContent = (gridOfPits[6] > gridOfPits[13] ? 'A' : 'B') + " is the winner!"
  boardDataEl.removeEventListener('click', handleclick)
}
}

init ()