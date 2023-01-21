let scoreEl1 = document.getElementById("scoreboard1")

let counter1 = 0
scoreEl1.textContent = counter1

function freethrow() {
    counter1 += 1
    scoreEl1.textContent = counter1
}

function jumper() {
    counter1 += 2
    scoreEl1.textContent = counter1
}

function three() {
    counter1 += 3
    scoreEl1.textContent = counter1
}

let scoreEl2 = document.getElementById("scoreboard2")

let counter2 = 0
scoreEl2.textContent = counter2

function freethrow1() {
    counter2 += 1
    scoreEl2.textContent = counter2
}

function jumper2() {
    counter2 += 2
    scoreEl2.textContent = counter2
}

function three2() {
    counter2 += 3
    scoreEl2.textContent = counter2
}