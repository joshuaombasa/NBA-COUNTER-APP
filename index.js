
const submitBtn = document.getElementById("submit-btn")
const teamsDisplay = document.getElementById("teams-display")
const homeScore = document.getElementById("home-score")

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
    const teamToUpdate = eventId.slice(0,4)
  console.log(eventId.slice(0,4))
}

function handleJumpShot(eventId) {
    const teamToUpdate = eventId.slice(0,4)
    console.log(eventId.slice(0,4))
}

function handleThree(eventId) {
    const teamToUpdate = 
    console.log(eventId.slice(0,4))
}