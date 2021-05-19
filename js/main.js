'use strict'
console.log('hello')




// var gMine = '<img src="img/mine.png" />'; 

var gMine = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,]

// var gcellsMinesAroundCount = 0;

// initGame() This is called when page loads
//


// gGameInterval = setInterval(createCherry, 15000)




// buildBoard() Builds the board 
// Set mines at random locations
// Call setMinesNegsCount()
// Return the created board

// var res = buildBoard()
// console.table(res)

// function buildBoard() {
//     // minesNegs = setMinesNegsCount(board)
//     var gboard = [];
//     for (var i = 0; i < 4; i++) {
//         gboard.push([]);
//         for (var j = 0; j < 4; j++) {


//         }

//     }
//     return gboard;
// }

function getMine(mine) {
    return mine.pop()
}


// function startTimer() {
//     var elTimer = document.querySelector('.timer')
//     setInterval(function () {
//         gTimer += 0.001
//         elTimer.innerText = gTimer.toFixed(3)
//     }, 1)

// }


// checkGameOver()

// 


//     setMinesNegsCount(board) Count mines around each cell 
// and set the cell's 
// minesAroundCount.

renderBoard(4)
function renderBoard(size) {
    var strHTML = '';
    for (var i = 0; i < size; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < size; j++) {

            strHTML += '<td class="td" onclick="cellClicked(this)">' + getMine(gMine) + '</td>';

        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;

}

// setTimeout(() => {
//     $(that).select();
// }, 0);

function cellClicked(elCell) {
    // To Do: if cell is clicked....
    // Called when a cell (td) is
    // clicked
    var clickedNum = +elCell.innerText
}





// cellMarked(elCell)
// Called on right click to mark a
// cell (suspected to be a mine)
// Search the web (and 
// implement) how to hide the 
// context menu on right click


// function random_location() {
//     return {
//         lon: Math.floor(Math.random() * 360) - 179,
//         lat: Math.floor(Math.random() * 181) - 90
//     }
// }


function gameOver() {
    console.log('Game Over');
    gGame.isOn = false;
    clearInterval(gIntervalGhosts)
    document.querySelector('.modal').style.display = 'block'
}


