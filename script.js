const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')

let result = 0
let hitPosition
let timerId = null
let currentTime = 10

function play() {
    function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})


function moveMole() {
    timerId = setInterval(randomSquare, 530)
}

randomSquare()
moveMole()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimer)
        clearInterval(timerId)
        // alert('GAME OVER! Your final score is ' + result)
        restartGame()
    }
}

function restartGame() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    const restartButton = document.createElement('button')
    const container = document.querySelector('.container')
    const grid = document.querySelector('.grid')
    grid.remove()
    restartButton.setAttribute('class', 'restart-button')
    restartButton.textContent = 'Restart!'
    container.appendChild(restartButton)
    const a = document.querySelectorAll('.a')
        a.forEach(b => {
            b.remove()
        })

    restartButton.addEventListener('click', () => {
        a.forEach( b => {
            container.appendChild(b)
        })
        container.appendChild(grid)
        restartButton.remove()
        result = 0
        play()
    })
}

const countDownTimer = setInterval(countDown, 1000)
currentTime = 10
}

play()