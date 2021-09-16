/*----- constants -----*/

/*----- app's state (variables) -----*/
let playerTurn;
let gameBoard;
let gridOfPits = [2, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];

/*----- cached element references -----*/
let boardDataEl = document.getElementById("mancala-board");
let pits = Array.from(document.querySelectorAll("#mancala-board div .cell"));
/*----- event listeners -----*/
boardDataEl.addEventListener("click", handleclick);
/*----- functions -----*/
function initialize() {
  playerTurn = "A";
  // Object and arrays containing all positions
  gridOfPits = [2, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
}

function handleclick(evt) {
  // gather position clicked
    // transform in coordinates
  let clickedCell = parseClass(evt.target.className);
  console.log(clickedCell);
  if (clickedCell.bgA === 6 || clickedCell.bgA ===13) return
  // check to see if the player can take those marbles
  console.log(evt.target.id);

  //distribute stones to the next pit
  stoneDistribution(clickedCell);
  render();
}

// give that div a coordinate classname decode
function parseClass(className) {
  let gatheredClass = className.split("-");
  return {
    plyr: gatheredClass[0].slice(-1),
    bgA: parseInt(gatheredClass[1]),
    smA: parseInt(gatheredClass[2]),
  };
}
// Assign arrays by players
function togglePlayer() {
  if (playerTurn === "A") {
    playerTurn = "B";
  } else {
    playerTurn = "A";
  }
}
function render() {
  gridOfPits.forEach(function (mark, index) {
      pits[index].innerHTML = mark;
  });
}
// function validMove (clickedCell) {
//   if ( playerTurn === playerPitsClicked && index >= 0 && index <= 5 && gridOfPits[index] > 0 ) 
//   {  console.log('B valid move')} 
//   return true;
// }

function checkWin() {}
// Function to fill subsequent arrays progressively

function stoneDistribution(clickedCell) {
  // let clickedArray =  gridOfPits[clickedCell.bgA]
  let index = clickedCell.bgA;
  console.log("index", index);
  // let nextArray = gridOfPits[clickedCell.bgA];
  let playerPitsClicked = clickedCell.plyr;
  let numberOfStones = gridOfPits[index];
  console.log("nuombre de stones", numberOfStones);

  let playerTurn = "A";
  // gridOfPits[index] = []

  // let i
  // { gridOfPits[i]= gridOfPits[i]+1 ;
  //     console.log("donde", gridOfPits[i]);
      gridOfPits[index] = 0;
      gridOfPits.lenght =14
      if (!index === 6 || !index === 13) return ;
      
  // _____
  for (let i = numberOfStones; i > 0; i--) {
    // gridOfPits[index] = 0;
    // Increment by 1 for next pit
 
    if (index === 6 && playerPitsClicked !== playerTurn) {
      index = 7;
        }
    if (index === 13 ) {
      index = 0; 
          }

    // if (playerTurn !== playerPitsClicked) {
    //   alert("not your turn");
    // }
    if (index < 7) {
      gridOfPits[1+index++] += 1;
       console.log(index)
      console.log("bactrak", gridOfPits);

    } else if (index <= 14 && index >= 7) {
      // gridOfPits[Math.abs(index--)] += 1;
      gridOfPits[1+index++] += 1;

      console.log("donde", gridOfPits);
    }

    togglePlayer();
  }
}
// if (i===1 &&  {}



// ________________________
// for (let i = index; i <= (index + clickedElement);  i++)
// {
// { if (index = 6) {index = 7} else index +=1}
// { if (i = 13) {i = 0} else index +=1}
// { if (playerPitsClicked= playerTurn) {i < 6 ; console.log(playerTurn)} else return }
// { if (playerPitsClicked!= playerTurn) {i > 7} else return}
// console.log(playerTurn)

// gridOfPits[i]= gridOfPits[i]+1 ;
// console.log("donde", gridOfPits[i]);
// gridOfPits[index] = 0;

// ________________________

// }
// if (clickedArray.lenght > 0) return

// // clickedArray.forEach(function(i) {
// //     nextArray.push(gridOfPits[i])
// //     // clickedArray.splice(i);
// // })

// {for (let b = clickedCell.bgA; b < clickedArray.length; b++)

//     { nextArray = gridOfPits[b];
//         console.log(gridOfPits[b], "inside 1st loop") }

//  { for(let i = 0; i < clickedArray.length; i++) {
//     nextArray.push(clickedArray[i])
//     console.log(nextArray,"inside the 2nd loop")

//     clickedArray.splice(i, 1);
//     i--;
//  }
//     console.log("new data of clicked array after loop:"+clickedArray)
//     console.log(nextArray)
//  }

//  }
// ?
// Direction of movement of the stones (gather array length)
// Stop distribution of stone (stop loop based on number of stone)
// Increased capacity of the hole (array)

// loop over the array.lenght of clicked cell
// forEach element in the array, array.push 1
// in each nex arra
