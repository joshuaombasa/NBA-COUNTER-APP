
const submitBtn = document.getElementById("submit-btn")
const teamsDisplay = document.getElementById("teams-display")
const homeScore = document.getElementById("home-score")

let counter = {
    home: 0,
    away:0
}

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
   
    if (teamToUpdate === "home-score") {
        counter.home += 1
        document.getElementById(teamToUpdate).textContent = counter.home
    } else if (teamToUpdate === "away-score") {
        counter.away += 1
        document.getElementById(teamToUpdate).textContent = counter.away
    }
    
    console.log(counter.home)
    console.log(counter.away)
}

function handleJumpShot(eventId) {
    let teamToUpdate = eventId.slice(0,4)
    teamToUpdate = teamToUpdate.concat("-score")

    if (teamToUpdate === "home-score") {
        counter.home += 2
        document.getElementById(teamToUpdate).textContent = counter.home
    } else if (teamToUpdate === "away-score") {
        counter.away += 2
        document.getElementById(teamToUpdate).textContent = counter.away
    }
    
    console.log(counter.home)
    console.log(counter.away)
    
}

function handleThree(eventId) {
    let teamToUpdate = eventId.slice(0,4)
    teamToUpdate = teamToUpdate.concat("-score")
    
    
    if (teamToUpdate === "home-score") {
        counter.home += 3
        document.getElementById(teamToUpdate).textContent = counter.home
    } else if (teamToUpdate === "away-score") {
        counter.away += 3
        document.getElementById(teamToUpdate).textContent = counter.away
    }
    
    console.log(counter.home)
    console.log(counter.away)
    
}