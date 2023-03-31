
const submitBtn = document.getElementById("submit-btn")
const teamsDisplay = document.getElementById("teams-display")
const homeScore = document.getElementById("home-score")

let homeCounter = 0
let awayCounter = 0

submitBtn.addEventListener('click', () => {
    const homeTeam = document.getElementById("home-team").value
    const awayTeam = document.getElementById("away-team").value

    teamsDisplay.innerHTML = `<h4 class="teams-playing">${homeTeam}  VS  ${awayTeam}</h4>`
})

document.addEventListener("click", (event) => {
   if (event.target.id === "home-free-throw") {
    handleFreeThrow(event.target.id)
   } else if (event.target.id === "home-jump-shot") {
    handleJumpShot(event.target.id)
   } else if (event.target.id === "home-three-points") {
    handleThree(event.target.id)
   }else if (event.target.id === "away-free-throw") {
    handleFreeThrow(event.target.id)
   }else if (event.target.id === "away-jump-shot") {
    handleJumpShot(event.target.id)
   }else if (event.target.id === "away-three-points") {
    handleThree(event.target.id)
   }
})

function handleFreeThrow(eventId) {
    let teamToUpdate = eventId.slice(0,4)
    teamToUpdate = teamToUpdate.concat("-score")
    homeCounter += 1
    document.getElementById(teamToUpdate).textContent = homeCounter
}

function handleJumpShot(eventId) {
    let teamToUpdate = eventId.slice(0,4)
    teamToUpdate = teamToUpdate.concat("-score")
    console.log(Number(document.getElementById(teamToUpdate).textContent) +=  2)

}

function handleThree(eventId) {
    let teamToUpdate = eventId.slice(0,4)
    teamToUpdate = teamToUpdate.concat("-score")
    console.log(Number(document.getElementById(teamToUpdate).textContent) += 3)
}