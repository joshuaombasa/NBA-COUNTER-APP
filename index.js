
const submitBtn = document.getElementById("submit-btn")
const teamsDisplay = document.getElementById("teams-display")
const homeScore = document.getElementById("home-score")
const container = document.getElementById("container")


container.innerHTML = 
`<header>
<h3>WELCOME TO THE NBA</h3>
<div class="teams-display" id="teams-display">
    <input type="text" id="home-team" class="home-team" placeholder="Home Team" required>
    <input type="text" id="away-team" class="away-team" placeholder="Away Team" required>
    <button class="submit-btn" id="submit-btn">Add teams</button>
</div>
</header>
<div class="score-box" id="score-box">
<h1 class="home-score team-box-styling" id="home-score">00</h1>
<h1 class="away-score team-box-styling" id="away-score">00</h1>
</div>
<div class="score-buttons" id="score-buttons">
<div class="home-buttons">
    <div class="btn-containers"><button class="home-free-throw" id="home-free-throw">+1</button></div>
    <div class="btn-containers"><button class="home-jump-shot" id="home-jump-shot">+2</button></div>
    <div class="btn-containers"><button class="home-three-points" id="home-three-points">+3</button></div>
</div>

<div class="away-buttons">
    <div class="btn-containers"><button class="away-free-throw" id="away-free-throw">+1</button></div>
    <div class="btn-containers"><button class="away-jump-shot" id="away-jump-shot">+2</button></div>
    <div class="btn-containers"><button class="away-three-points" id="away-three-points">+3</button></div>
</div>
</div>
`

let counter = {
    home: 0,
    away:0
}

let homeTeam = ''
let awayTeam = ''

submitBtn.addEventListener('click', () => {
    homeTeam = document.getElementById("home-team").value
    awayTeam = document.getElementById("away-team").value

    teamsDisplay.innerHTML = `<h4 class="teams-playing" id="teams-playing">${homeTeam}  VS  ${awayTeam}</h4>`
    counter.home = 0
    counter.away = 0
})

document.getElementById("home-score").textContent = counter.home
document.getElementById("away-score").textContent = counter.away

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
    
    displayLeadingTeam()
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
    
    displayLeadingTeam()
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
    
    displayLeadingTeam()
    
}

function displayLeadingTeam() {

    if (counter.home > counter.away) {
        console.log('Home leads')
        document.getElementById("teams-playing").textContent = `${homeTeam} are Leading by ${counter.home - counter.away}`
        document.getElementById("teams-playing").style.color = 'gold'
        document.getElementById("score-box").style.color = 'gold'

    } else if (counter.home < counter.away) {
        console.log('Away leads')
        document.getElementById("teams-playing").textContent = `${awayTeam} are Leading by ${counter.away - counter.home}`
        document.getElementById("teams-playing").style.color = 'rgb(78, 78, 232)'
        document.getElementById("score-box").style.color = 'rgb(78, 78, 232)'
        
    } else {
        document.getElementById("score-box").style.color = '#fff'
        document.getElementById("teams-playing").textContent = `Equal Score`
        document.getElementById("teams-playing").style.color = '#fff'
    }
}

