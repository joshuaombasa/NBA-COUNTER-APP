
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

   } else if (event.target.id === "home-three-points") {

   }else if (event.target.id === "away-free-throw") {
    
   }else if (event.target.id) {
    
   }else if (event.target.id) {
    
   }else if (event.target.id) {
    
   }
})

function handleFreeThrow(eventId) {
  console.log(eventId.slice(3))
}