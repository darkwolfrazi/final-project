const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements = document.querySelector('game-square')
const board = document.getElementById('game-board')
let circleTurn
const playAgainButton = document.getElementById('button-play-again')


startGame()

function startGame(){
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once:true})
    })
    setBoardHoverClass()
} 

function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell,currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    } else if(isDraw()){
        endGame(true)
    } else{
        swapTurns()
    setBoardHoverClass()
    }   
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains (CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
}

playAgainButton.addEventListener('click', startGame)