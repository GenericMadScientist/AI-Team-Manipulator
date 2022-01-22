// Represents the output of Stadium 2's PRNG, modulo 8.
class OctalPrng {
  constructor (seed) {
    this.seed = seed
    this.randBit = function () {
      this.seed = (5 * this.seed + 7) % 8
      return this.seed % 2
    }
    this.randOctalDigit = function () {
      this.seed = (5 * this.seed + 7) % 8
      return this.seed
    }
    this.clonePrng = function () {
      return new OctalPrng(this.seed)
    }
  }
}

// Represents the output of Stadium 2's PRNG, modulo 65536.
class ShortPrng {
  constructor (seed) {
    this.seed = seed
    this.randBit = function () {
      this.seed = (0x660D * this.seed + 0xF35F) % 65536
      return this.seed % 2
    }
    this.randOctalDigit = function () {
      this.seed = (0x660D * this.seed + 0xF35F) % 65536
      return this.seed % 8
    }
    this.randShort = function () {
      this.seed = (0x660D * this.seed + 0xF35F) % 65536
      return this.seed
    }
    this.clonePrng = function () {
      return new ShortPrng(this.seed)
    }
  }
}

const cupDropdown = document.querySelector('#cup')
const trainerDropdown = document.querySelector('#trainer')
let rentalPool = {}
const fitnessValues = [
  [NaN, NaN, NaN, NaN, NaN, NaN],
  [NaN, NaN, NaN, NaN, NaN, NaN],
  [NaN, NaN, NaN, NaN, NaN, NaN],
  [NaN, NaN, NaN, NaN, NaN, NaN],
  [NaN, NaN, NaN, NaN, NaN, NaN],
  [NaN, NaN, NaN, NaN, NaN, NaN]
]

cupDropdown.addEventListener('change', fillTrainers)
trainerDropdown.addEventListener('change', displayAiData)
trainerDropdown.addEventListener('change', displayTeam)
trainerDropdown.addEventListener('change', changeRentalPool)
trainerDropdown.addEventListener('change', assignFitnessValues)
trainerDropdown.addEventListener('change', displayPotentialAiTeams)

for (const select of document.querySelector('#rental-selections').children) {
  select.addEventListener('change', assignFitnessValues)
  select.addEventListener('change', displayPotentialAiTeams)
}

fillTrainers()

function fillTrainers () {
  const trainers = cupData[cupDropdown.value]
  trainerDropdown.innerHTML = ''
  for (let i = 0; i < trainers.length; i++) {
    const option = document.createElement('option')
    option.value = i
    option.innerText = trainers[i].name
    trainerDropdown.appendChild(option)
  }
  displayAiData()
  displayTeam()
  changeRentalPool()
  assignFitnessValues()
  displayPotentialAiTeams()
}

function displayAiData () {
  const opponent = cupData[cupDropdown.value][trainerDropdown.value]
  const quirksDescriptions = {
    randomFitness: 'Uses random fitness values',
    mustUseFirstPoke: `Always ${opponent.ai.doesNotReorderTeam ? 'leads' : 'brings'} ${pokemonData[opponent.team[0].species].name}`,
    mustUseLastPoke: `Always brings ${pokemonData[opponent.team[5].species].name}`,
    penaliseBestFitnessPokeLead: 'Prefers to not lead with best pokémon',
    usesRandomLead: 'Uses random lead',
    mustUseFromAllColumns: 'Always selects one from each column',
    mustNotUseBothBestPokes: 'Does not use both of two best pokémon',
    doesNotPenaliseCommonResistances: 'Does not penalise teams with overlapping physical resistances',
    ignoresTypeMatchups: 'Ignores type matchups',
    knowsPlayerMoves: "Knows the player's moves"
  }
  const keysIncompatibleWithNoReorder = ['penaliseBestFitnessPokeLead', 'usesRandomLead']
  const quirksList = document.querySelector('#ai-opponent-quirks')
  quirksList.innerHTML = ''
  for (const [key, value] of Object.entries(quirksDescriptions)) {
    if (keysIncompatibleWithNoReorder.includes(key) && opponent.ai.doesNotReorderTeam) {
      continue
    }
    if (opponent.ai[key]) {
      const data = document.createElement('li')
      data.innerText = value
      quirksList.appendChild(data)
    }
  }
}

function displayTeam () {
  const team = cupData[cupDropdown.value][trainerDropdown.value].team
  const teamOutput = document.querySelector('#team')
  for (let i = 0; i < 6; i++) {
    fillInPokemon(teamOutput.children[i], team[i])
  }
}

function fillInPokemon (element, pokemon) {
  element.querySelector('.name').innerHTML = displayName(pokemon)
  const x = 64 * (252 - pokemon.species)
  element.querySelector('.sprite').style.backgroundPositionX = `${x}px`
  element.querySelector('.held-item').textContent = itemNames[pokemon.item]
  fillInStats(element.querySelector('.stats'), pokemon.stats)
  fillInMoves(element.querySelector('.moves'), pokemon.moves)
}

function displayName (pokemon) {
  let name = `L${pokemon.level} ${pokemonData[pokemon.species].name}`
  if (pokemon.gender === '♂') {
    name += ' <span class="male">♂</span>'
  } else if (pokemon.gender === '♀') {
    name += ' <span class="female">♀</span>'
  }
  return name
}

function fillInStats (element, stats) {
  for (const row of element.querySelectorAll('tr')) {
    row.querySelector('.stat').textContent = stats[row.className]
  }
}

function fillInMoves (element, moves) {
  const moveElements = element.querySelectorAll('li')
  for (let i = 0; i < 4; i++) {
    moveElements[i].textContent = moveData[moves[i]].name
  }
}

function changeRentalPool () {
  const earlDivisions = ['earl-trainer', 'earl-gym-leader', 'earl-elite-four']
  const cup = cupDropdown.value
  let newRentals = rentals.poke
  if (cup === 'little-r1' || cup === 'little-r2') {
    newRentals = rentals.little
  } else if (cup === 'prime-r1' || cup === 'prime-r2') {
    // The only change aside from the addition of Mew and Celebi is the change
    // of a move on Pikachu and Psyduck, but no Prime Cup opponents read your
    // moves for team selection so it is irrelevant.
    newRentals = rentals.primeR2
  } else if (earlDivisions.includes(cup)) {
    newRentals = earlRentals[cup][trainerDropdown.value]
  }
  if (rentalPool !== newRentals) {
    rentalPool = newRentals
    const selections = document.querySelector('#rental-selections').querySelectorAll('select')
    for (const select of selections) {
      select.innerHTML = ''
    }

    if (earlDivisions.includes(cup)) {
      for (let i = 0; i < selections.length; i++) {
        const option = document.createElement('option')
        option.value = i
        option.innerText = pokemonData[rentalPool[i].species].name
        selections[i].appendChild(option)
      }
    } else {
      for (const select of selections) {
        const option = document.createElement('option')
        option.value = -1
        option.innerText = '-'
        select.appendChild(option)
      }
      for (let i = 0; i < rentalPool.length; i++) {
        const poke = rentalPool[i]
        const option = document.createElement('option')
        option.value = i
        if (poke.species === 29) {
          option.innerText = 'Nidoran♀'
        } else if (poke.species === 32) {
          option.innerText = 'Nidoran♂'
        } else {
          option.innerText = pokemonData[poke.species].name
        }
        for (const select of selections) {
          select.appendChild(option.cloneNode(true))
        }
      }
    }
  }
}

function assignFitnessValues () {
  const rentalSelections = document.querySelector('#rental-selections').querySelectorAll('select')
  const aiTrainer = cupData[cupDropdown.value][trainerDropdown.value]
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      fitnessValues[i][j] = NaN
      const rentalChoice = parseInt(rentalSelections[j].value)
      if (!aiTrainer.ai.randomFitness && rentalChoice !== -1) {
        fitnessValues[i][j] = computeMatchupFitness(aiTrainer.team[i], rentalPool[rentalChoice], aiTrainer.ai)
      }
    }
  }

  const fitnessSets = document.querySelectorAll('.fitnesses')
  for (let i = 0; i < 6; i++) {
    const listItems = fitnessSets[i].querySelectorAll('li')
    for (let j = 0; j < 6; j++) {
      listItems[j].innerHTML = fitnessValueToText(fitnessValues[i][j])
    }
    const totalFitness = fitnessValues[i].reduce((a, b) => a + b, 0)
    listItems[6].innerHTML = `Total fitness: ${fitnessValueToText(totalFitness)}`
  }
}

function fitnessValueToText (fitness) {
  if (isNaN(fitness)) {
    return '???'
  }
  const fitnessStr = fitness.toLocaleString(undefined, { signDisplay: 'always' })
  const signClass = (fitness >= 0) ? 'positive-fitness' : 'negative-fitness'
  return `<span class="${signClass}">${fitnessStr}</span>`
}

function displayPotentialAiTeams () {
  const pokeCups = [
    'poke-poke-r1', 'poke-great-r1', 'poke-ultra-r1', 'poke-master-r1',
    'poke-poke-r2', 'poke-great-r2', 'poke-ultra-r2', 'poke-master-r2'
  ]
  const trainer = cupData[cupDropdown.value][trainerDropdown.value]
  let allowableTeams = []
  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
      for (let k = j + 1; k < 6; k++) {
        allowableTeams.push([i, j, k])
      }
    }
  }

  if (trainer.ai.mustUseFirstPoke) {
    allowableTeams = allowableTeams.filter(team => team[0] === 0)
  }

  if (pokeCups.includes(cupDropdown.value)) {
    allowableTeams = allowableTeams.filter(([i, j, k]) => (trainer.team[i].level + trainer.team[j].level + trainer.team[k].level) <= 155)
  }

  if (trainer.ai.mustUseLastPoke) {
    allowableTeams = allowableTeams.filter(team => team[2] === 5)
  }

  if (trainer.ai.mustUseFromAllColumns) {
    allowableTeams = allowableTeams.filter(([i, j, k]) => ((i + j + k) % 3 === 0))
  }

  const aiTeams = document.querySelector('#potential-teams-body')
  aiTeams.innerHTML = ''
  let teamsWithLeads = []
  if (trainer.ai.randomFitness) {
    teamsWithLeads = getPotentialTeamsWithLeadsRandomFitness(allowableTeams, trainer)
  } else {
    teamsWithLeads = getPotentialTeamsWithLeads(allowableTeams, trainer)
  }
  for (const team of teamsWithLeads) {
    let probabilityText = '???'
    if (!fitnessValues.flat().some(isNaN) || trainer.ai.randomFitness) {
      probabilityText = team.probability.toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
    }
    const row = document.createElement('tr')
    const teamData = document.createElement('td')
    teamData.innerText = team.team.map(i => pokemonData[trainer.team[i].species].name).join(' / ')
    const probabilityData = document.createElement('td')
    probabilityData.innerText = probabilityText
    row.appendChild(teamData)
    row.appendChild(probabilityData)
    aiTeams.appendChild(row)
  }
}

function getPotentialTeamsWithLeads (allowableTeams, trainer) {
  const fitnesses = fitnessValues.map(fs => fs.reduce((a, b) => a + b, 0))
  const resistances = trainer.team.map(p => Array.from(Array(28).keys()).map(i => doesResist(i, pokemonData[p.species].types)))
  const combosWithFitness = allowableTeams.map(team => ({ team: team, fitness: getTeamFitness(team, trainer, fitnesses, resistances) }))
  const possibleOutcomes = new Map()
  const seedWeights = [27, 9, 9, 3, 9, 3, 3, 1]

  for (let i = 0; i < 8; i++) {
    const prng = new OctalPrng(i)
    const ruledOutMember = prng.randBit()
    let combosWithFitnessClone = [...combosWithFitness]
    if (trainer.ai.mustNotUseBothBestPokes && !fitnessValues.flat().some(isNaN)) {
      const [bestPoke, secondBestPoke] = bestTwoPokes()
      if (ruledOutMember === 0) {
        combosWithFitnessClone = combosWithFitness.filter(fitnessedTeam => !fitnessedTeam.team.includes(bestPoke))
      } else {
        combosWithFitnessClone = combosWithFitness.filter(fitnessedTeam => !fitnessedTeam.team.includes(secondBestPoke))
      }
    }
    let potentialTeams = bestEightTeams(combosWithFitnessClone, prng)
    if ([1, 2, 4, 8].includes(potentialTeams.length)) {
      potentialTeams = [potentialTeams[prng.randOctalDigit() % potentialTeams.length]]
    } else if (potentialTeams.length === 6) {
      const randomBit = prng.randBit()
      potentialTeams = [potentialTeams[randomBit], potentialTeams[randomBit + 2], potentialTeams[randomBit + 4]]
    } else {
      // potentialTeams.length is odd and so coprime to 2^32, but we still need
      // to call the PRNG to advance it for lead selection
      prng.randOctalDigit()
    }
    for (const team of potentialTeams) {
      const leads = decideLead(team, trainer, prng.clonePrng())
      const probabilityIncrement = seedWeights[i] / (64 * potentialTeams.length * leads.length)
      for (const lead of leads) {
        const teamCopy = [...team]
        const leadIndex = team.indexOf(lead);
        [teamCopy[0], teamCopy[leadIndex]] = [teamCopy[leadIndex], teamCopy[0]]
        const key = JSON.stringify(teamCopy)
        if (possibleOutcomes.has(key)) {
          possibleOutcomes.set(key, possibleOutcomes.get(key) + probabilityIncrement)
        } else {
          possibleOutcomes.set(key, probabilityIncrement)
        }
      }
    }
  }

  return Array.from(possibleOutcomes)
    .sort(
      function (a, b) {
        if (a[1] !== b[1]) {
          return b[1] - a[1]
        }
        return a[0].localeCompare(b[0])
      }
    )
    .map(([team, probability]) => ({ team: JSON.parse(team), probability: probability }))
}

function getPotentialTeamsWithLeadsRandomFitness (allowableTeams, trainer) {
  const resistances = trainer.team.map(p => Array.from(Array(28).keys()).map(i => doesResist(i, pokemonData[p.species].types)))
  const possibleOutcomes = new Map()

  for (let i = 0; i < 65536; i++) {
    const prng = new ShortPrng(i)
    const fitnesses = []
    for (let j = 0; j < 6; j++) {
      fitnesses.push(prng.randShort())
    }
    const combosWithFitness = allowableTeams.map(team => ({ team: team, fitness: getTeamFitness(team, trainer, fitnesses, resistances) }))
    const ruledOutMember = prng.randBit()
    let combosWithFitnessClone = [...combosWithFitness]
    if (trainer.ai.mustNotUseBothBestPokes) {
      const [bestPoke, secondBestPoke] = bestTwoPokes()
      if (ruledOutMember === 0) {
        combosWithFitnessClone = combosWithFitness.filter(fitnessedTeam => !fitnessedTeam.team.includes(bestPoke))
      } else {
        combosWithFitnessClone = combosWithFitness.filter(fitnessedTeam => !fitnessedTeam.team.includes(secondBestPoke))
      }
    }
    let potentialTeams = bestEightTeams(combosWithFitnessClone, prng)
    if ([1, 2, 4, 8].includes(potentialTeams.length)) {
      potentialTeams = [potentialTeams[prng.randOctalDigit() % potentialTeams.length]]
    } else if (potentialTeams.length === 6) {
      const randomBit = prng.randBit()
      potentialTeams = [potentialTeams[randomBit], potentialTeams[randomBit + 2], potentialTeams[randomBit + 4]]
    } else {
      // potentialTeams.length is odd and so coprime to 2^32, but we still need
      // to call the PRNG to advance it for lead selection
      prng.randOctalDigit()
    }
    let seedWeight = 1
    let seed = i
    for (let j = 0; j < 16; ++j) {
      if (seed & 1) {
        seedWeight *= 0.25
      } else {
        seedWeight *= 0.75
      }
      seed >>= 1
    }
    for (const team of potentialTeams) {
      const leads = decideLead(team, trainer, prng.clonePrng())
      const probabilityIncrement = seedWeight / (potentialTeams.length * leads.length)
      for (const lead of leads) {
        const teamCopy = [...team]
        const leadIndex = team.indexOf(lead);
        [teamCopy[0], teamCopy[leadIndex]] = [teamCopy[leadIndex], teamCopy[0]]
        const key = JSON.stringify(teamCopy)
        if (possibleOutcomes.has(key)) {
          possibleOutcomes.set(key, possibleOutcomes.get(key) + probabilityIncrement)
        } else {
          possibleOutcomes.set(key, probabilityIncrement)
        }
      }
    }
  }

  return Array.from(possibleOutcomes)
    .sort(
      function (a, b) {
        if (a[1] !== b[1]) {
          return b[1] - a[1]
        }
        return a[0].localeCompare(b[0])
      }
    )
    .map(([team, probability]) => ({ team: JSON.parse(team), probability: probability }))
}

function bestTwoPokes () {
  const fitnessTotals = fitnessValues.map(values => values.reduce((a, b) => a + b, 0))
  let bestPoke = 0
  let secondBestPoke = 1
  if (fitnessTotals[1] > fitnessTotals[0]) {
    bestPoke = 1
    secondBestPoke = 0
  }
  for (let j = 2; j < 6; j++) {
    if (fitnessTotals[j] > fitnessTotals[bestPoke]) {
      secondBestPoke = bestPoke
      bestPoke = j
    } else if (fitnessTotals[j] > fitnessTotals[secondBestPoke]) {
      secondBestPoke = j
    }
  }
  return [bestPoke, secondBestPoke]
}

function bestEightTeams (teams, prng) {
  if (isNaN(teams[0].fitness)) {
    return teams.map(fitnessedTeam => fitnessedTeam.team)
  }
  const bestTeams = [teams[0]]
  for (let i = 1; i < teams.length; i++) {
    let insertPosition = -1
    for (let j = 0; j < bestTeams.length; j++) {
      if (bestTeams[j].fitness < teams[i].fitness) {
        insertPosition = j
        break
      }
      if (bestTeams[j].fitness === teams[i].fitness && prng.randBit()) {
        insertPosition = j
        break
      }
    }
    if (insertPosition === -1 && bestTeams.length < 8) {
      insertPosition = bestTeams.length
    }
    if (insertPosition !== -1) {
      if (bestTeams.length < 8) {
        bestTeams.push(null)
      }
      bestTeams.copyWithin(insertPosition + 1, insertPosition)
      bestTeams[insertPosition] = teams[i]
    }
  }
  return bestTeams.map(fitnessedTeam => fitnessedTeam.team)
}

function decideLead (teamCombo, trainer, prng) {
  if (trainer.ai.doesNotReorderTeam) {
    return [teamCombo[0]]
  }
  if (trainer.ai.usesRandomLead || (!trainer.ai.randomFitness && fitnessValues.flat().some(isNaN))) {
    return [teamCombo[0], teamCombo[1], teamCombo[2]]
  }

  const fitnesses = teamCombo.map(i => fitnessValues[i].reduce((a, b) => a + b, 0))

  let bestFitness = fitnesses[0]
  let bestFitnessPoke = 0
  let bestSpeed = trainer.team[teamCombo[0]].stats.speed
  let bestSpeedPoke = 0
  for (let i = 1; i < 3; i++) {
    if (fitnesses[i] > bestFitness) {
      bestFitness = fitnesses[i]
      bestFitnessPoke = i
    } else if (fitnesses[i] === bestFitness && prng.randBit()) {
      bestFitnessPoke = i
    }
    const newSpeed = trainer.team[teamCombo[i]].stats.speed
    if (newSpeed > bestSpeed) {
      bestSpeed = newSpeed
      bestSpeedPoke = i
    } else if (newSpeed === bestSpeed && prng.randBit()) {
      bestSpeedPoke = i
    }
  }

  const leadFitnesses = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    if (trainer.team[teamCombo[i]].moves.includes(226)) {
      leadFitnesses[i] = Math.floor((60 * trainer.ai.desireForBatonPass) / 128)
    }
    if (i === bestSpeedPoke) {
      leadFitnesses[i] += 20
    }
    if (i === bestFitnessPoke) {
      if (trainer.ai.penaliseBestFitnessPokeLead) {
        leadFitnesses[i] -= 30
      } else {
        leadFitnesses[i] += 30
      }
    }
  }

  let bestLeadFitness = leadFitnesses[0]
  let bestLeadFitnessPoke = 0
  for (let i = 1; i < 3; i++) {
    if (leadFitnesses[i] > bestLeadFitness) {
      bestLeadFitness = leadFitnesses[i]
      bestLeadFitnessPoke = i
    } else if (leadFitnesses[i] === bestLeadFitness && prng.randBit()) {
      bestLeadFitnessPoke = i
    }
  }

  return [teamCombo[bestLeadFitnessPoke]]
}

function doesResist (attackType, defenderTypes) {
  let index = 28 * 28 * attackType + 28 * defenderTypes[0]
  if (defenderTypes.length === 1) {
    index += defenderTypes[0]
  } else {
    index += defenderTypes[1]
  }
  return precomputedResists[index]
}

function getTeamFitness (teamCombo, trainer, fitnesses, resistances) {
  let teamFitness = teamCombo.reduce((a, b) => a + fitnesses[b], 0)
  if (trainer.ai.doesNotPenaliseCommonResistances) {
    return teamFitness
  }
  for (let i = 0; i < 10; i++) {
    const resistCount = resistances[teamCombo[0]][i] + resistances[teamCombo[1]][i] + resistances[teamCombo[2]][i]
    if (resistCount < 2) {
      continue
    }
    if (teamFitness > 0) {
      if (resistCount === 2) {
        teamFitness *= 9
      } else {
        teamFitness *= 7
      }
      // Yes this type of overflow can happen. For example, due to this there in
      // Werster's Complete the Game PB R1 Great Ball Chen's evaluation for
      // Spinarak/Haunter/Misdreavus goes so negative that it overflows and
      // becomes positive before the division by 10 when applying the common Bug
      // resistance.
      if (teamFitness >= 0x80000000) {
        teamFitness -= 0x100000000
        teamFitness = Math.ceil(teamFitness / 10)
      } else {
        teamFitness = Math.floor(teamFitness / 10)
      }
    } else {
      if (resistCount === 2) {
        teamFitness *= 11
      } else {
        teamFitness *= 13
      }
      if (teamFitness < -0x80000000) {
        teamFitness += 0x100000000
        teamFitness = Math.floor(teamFitness / 10)
      } else {
        teamFitness = Math.ceil(teamFitness / 10)
      }
    }
  }
  return teamFitness
}

function computeMatchupFitness (aiPoke, playerPoke, ai) {
  const ignoredMoves = [12, 13, 32, 63, 71, 72, 90, 117, 120, 130, 138, 141, 153, 202, 248, 251]
  let candidatePlayerMoves = playerPoke.learnableMoves
  if (ai.knowsPlayerMoves) {
    candidatePlayerMoves = playerPoke.moves
  }
  const damageByPlayer = candidatePlayerMoves
    .filter(m => !ignoredMoves.includes(m))
    .map(m => moveDamage(playerPoke, aiPoke, ai, m))
    .reduce((a, b) => Math.max(a, b), 0)
  const damageRatioByPlayer = Math.min(Math.floor((damageByPlayer * 255) / aiPoke.stats.hp), 255)
  let fitness = 0
  for (const move of aiPoke.moves) {
    if (move === 0) {
      fitness -= 58 * damageRatioByPlayer * ai.weightToDamageByPlayer
      continue
    }
    const damage = moveDamage(aiPoke, playerPoke, ai, move)
    const damageProportion = Math.min(Math.floor((damage * 255) / playerPoke.stats.hp), 255)
    fitness += Math.floor((128 * moveData[move].accuracy * damageProportion * ai.weightToDamageByAi) / 255)
    const secondaryEffectBoost = getSecondaryBoost(aiPoke, playerPoke, move, ai)
    fitness += Math.floor((moveData[move].accuracy * secondaryEffectBoost * ai.weightToSecondaryEffects) / 255)
    if (move === 120 || move === 153) {
      fitness -= 58 * 255 * ai.weightToDamageByPlayer
    } else {
      fitness -= 58 * damageRatioByPlayer * ai.weightToDamageByPlayer
    }
  }
  return fitness
}

function moveDamage (attacker, defender, ai, move) {
  if (moveData[move].power === 0) {
    return 0
  }

  let power = moveData[move].power
  if (move === 175 || move === 179) {
    power = 60
  } else if (move === 216) {
    power = Math.floor((10 * attacker.friendship) / 25)
  } else if (move === 217) {
    power = 52
  } else if (move === 218) {
    power = Math.floor((2550 - 10 * attacker.friendship) / 25)
  } else if (move === 222) {
    power = 64
  }

  let attack = attacker.stats.attack
  let defense = defender.stats.defense
  if (moveData[move].type >= 20) {
    attack = attacker.stats.spclAtk
    defense = defender.stats.spclDef
    if (attacker.item === 163 && attacker.species === 25) {
      attack *= 2
    }
  } else if (attacker.item === 118 && (attacker.species === 104 || attacker.species === 105)) {
    attack *= 2
  }

  let damage = 0
  if (move === 12 || move === 32 || move === 90) {
    damage = 65535
  } else if (move === 162) {
    damage = Math.max(defender.stats.hp >> 1, 1)
  } else if (move === 82) {
    damage = 40
  } else if (move === 49) {
    damage = 20
  } else if (move === 69 || move === 101) {
    damage = attacker.level
  } else if (move === 149) {
    damage = Math.floor(0.75 * attacker.level)
  } else {
    if (move === 120 || move === 153) {
      defense >>= 1
    }
    if (defense === 0) {
      defense = 1
    }
    damage = Math.floor(0.4 * attacker.level + 2) * power * attack
    damage = Math.floor(damage / defense)
    damage = Math.floor(damage / 50)
    if (doesItemBoostMoveType(attacker.item, moveData[move].type)) {
      damage = Math.floor((110 * damage) / 100)
    }
    if (damage < 999) {
      damage += 2
    } else {
      damage = 998
    }
  }

  const unaffectedByTypes = [12, 32, 49, 69, 82, 90, 101, 149, 162, 248]
  if (!unaffectedByTypes.includes(move) && !ai.ignoresTypeMatchups) {
    const moveType = moveData[move].type
    if (pokemonData[attacker.species].types.includes(moveType)) {
      damage += (damage >> 1)
    }

    for (const [aType, dType, mult] of typeMatchups) {
      if (aType === moveType && pokemonData[defender.species].types.includes(dType)) {
        damage = Math.floor((damage * mult) / 10)
      }
    }
  }

  return damage
}

function doesItemBoostMoveType (item, type) {
  const boosts = {
    170: 0, 104: 0, 98: 1, 77: 2, 81: 3, 76: 4, 125: 5, 88: 7, 113: 8, 143: 9, 138: 20, 95: 21, 117: 22, 108: 23, 96: 24, 107: 25, 144: 26, 151: 26, 102: 27
  }
  if (item in boosts) {
    return boosts[item] === type
  }
  return false
}

function getSecondaryBoost (attacker, defender, move, ai) {
  const secondaryChance = moveData[move].secondaryEffectChance
  const sleepMoves = [47, 79, 95, 142, 147]
  const poisonMoves = [77, 92, 139]
  const maybePoisonMoves = [40, 41, 123, 124, 188]
  const maybeBurnMoves = [7, 52, 53, 126, 172, 221]
  const maybeFreezeMoves = [8, 58, 59, 181]
  const paraMoves = [78, 86, 137]
  const maybeParaMoves = [9, 34, 84, 85, 87, 122, 192, 209, 225]
  const raiseAtkOneStageMoves = [96, 159]
  const raiseDefOneStageMoves = [106, 110, 111, 130]
  const raiseDefTwoStageMoves = [112, 151]
  const raiseEvasionMoves = [104, 107]
  const lowerDefOneStageMoves = [39, 43]
  const lowerDefAttacks = [51, 231, 249]
  const lowerSpeTwoStageMoves = [178, 184]
  const lowerSpeAttacks = [61, 132, 145, 196]
  const lowerSpDefAttacks = [94, 242, 247]
  const lowerAccuracyMoves = [28, 108, 134, 148]
  const lowerAccuracyAttacks = [189, 190]
  const flinchMoves = [27, 29, 44, 67, 125, 157, 158, 239]
  const confusionMoves = [48, 109, 186]
  const maybeConfusionMoves = [60, 93, 146, 223]

  if (sleepMoves.includes(move)) {
    return 28 * ai.desireToInflictSleep
  }
  if (poisonMoves.includes(move)) {
    if (pokemonData[defender.species].types.includes(3)) {
      return 0
    }
    if (!doesMoveTypeAffectPokemon(defender.species, move)) {
      return 0
    }
    return 28 * ai.desireToInflictPoison
  }
  if (maybePoisonMoves.includes(move)) {
    if (pokemonData[defender.species].types.includes(3)) {
      return 0
    }
    if (!doesMoveTypeAffectPokemon(defender.species, move)) {
      return 0
    }
    return Math.floor((28 * ai.desireToInflictPoison * secondaryChance) / 255)
  }
  if (maybeBurnMoves.includes(move)) {
    if (pokemonData[defender.species].types.includes(moveData[move].type)) {
      return 0
    }
    if (!doesMoveTypeAffectPokemon(defender.species, move)) {
      return 0
    }
    return Math.floor((28 * ai.desireToInflictBurn * secondaryChance) / 255)
  }
  if (maybeFreezeMoves.includes(move)) {
    if (pokemonData[defender.species].types.includes(moveData[move].type)) {
      return 0
    }
    if (!doesMoveTypeAffectPokemon(defender.species, move)) {
      return 0
    }
    return Math.floor((28 * ai.desireToInflictFreeze * secondaryChance) / 255)
  }
  if (paraMoves.includes(move)) {
    if (!doesMoveTypeAffectPokemon(defender.species, move)) {
      return 0
    }
    return 28 * ai.desireToInflictPara
  }
  if (maybeParaMoves.includes(move)) {
    if (!doesMoveTypeAffectPokemon(defender.species, move)) {
      return 0
    }
    return Math.floor((28 * ai.desireToInflictPara * secondaryChance) / 255)
  }
  if (raiseAtkOneStageMoves.includes(move)) {
    return 2 * ai.desireToRaiseStats[0]
  }
  if (move === 14) {
    return 4 * ai.desireToRaiseStats[0]
  }
  if (move === 232) {
    return Math.floor((4 * ai.desireToRaiseStats[0] * secondaryChance) / 255)
  }
  if (raiseDefOneStageMoves.includes(move)) {
    return 2 * ai.desireToRaiseStats[1]
  }
  if (raiseDefTwoStageMoves.includes(move)) {
    return 4 * ai.desireToRaiseStats[1]
  }
  if (move === 211) {
    return Math.floor((4 * ai.desireToRaiseStats[1] * secondaryChance) / 255)
  }
  if (move === 97) {
    return 4 * ai.desireToRaiseStats[2]
  }
  if (move === 74) {
    return 2 * ai.desireToRaiseStats[3]
  }
  if (move === 133) {
    return 4 * ai.desireToRaiseStats[4]
  }
  if (raiseEvasionMoves.includes(move)) {
    return 2 * ai.desireToRaiseStats[6]
  }
  if (move === 246) {
    return Array.from(Array(5).keys()).map(i => Math.floor((2 * ai.desireToRaiseStats[i] * secondaryChance) / 255)).reduce((a, b) => a + b, 0)
  }
  if (lowerDefOneStageMoves.includes(move)) {
    return Math.floor((2 * desireToLowerStats(ai, 255)) / 255)
  }
  if (move === 103) {
    return Math.floor((4 * desireToLowerStats(ai, 255)) / 255)
  }
  if (lowerDefAttacks.includes(move)) {
    return Math.floor((2 * desireToLowerStats(ai, secondaryChance)) / 255)
  }
  if (move === 81) {
    return Math.floor((4 * desireToLowerStats(ai, 255)) / 255)
  }
  if (lowerSpeTwoStageMoves.includes(move)) {
    return Math.floor((8 * desireToLowerStats(ai, 255)) / 255)
  }
  if (lowerSpeAttacks.includes(move)) {
    return Math.floor((4 * desireToLowerStats(ai, secondaryChance)) / 255)
  }
  if (lowerSpDefAttacks.includes(move)) {
    return Math.floor((8 * desireToLowerStats(ai, secondaryChance)) / 255)
  }
  if (lowerAccuracyMoves.includes(move)) {
    return Math.floor((10 * desireToLowerStats(ai, 255)) / 255)
  }
  if (lowerAccuracyAttacks.includes(move)) {
    return Math.floor((10 * desireToLowerStats(ai, secondaryChance)) / 255)
  }
  if (move === 230) {
    return Math.floor((12 * desireToLowerStats(ai, 255)) / 255)
  }
  if (flinchMoves.includes(move)) {
    if (attacker.stats.speed > defender.stats.speed) {
      return Math.floor((28 * ai.desireToInflictFlinch * secondaryChance) / 255)
    }
    return 0
  }
  if (move === 113) {
    return 58 * ai.desireForLightScreen
  }
  if (move === 54) {
    return 58 * ai.desireForMist
  }
  if (move === 116) {
    return 58 * ai.desireForFocusEnergy
  }
  if (confusionMoves.includes(move)) {
    return 28 * ai.desireToInflictConfusion
  }
  if (maybeConfusionMoves.includes(move)) {
    return Math.floor((28 * ai.desireToInflictConfusion * secondaryChance) / 255)
  }
  if (move === 115) {
    return 58 * ai.desireForReflect
  }
  if (move === 50) {
    return 58 * ai.desireForDisable
  }
  if (move === 213) {
    if (attacker.gender !== '' && defender.gender !== '' && attacker.gender !== defender.gender) {
      return 58 * ai.desireToInflictInfatuation
    }
    return 0
  }
  if (move === 226) {
    return 58 * ai.desireForBatonPass
  }

  return 0
}

function doesMoveTypeAffectPokemon (species, move) {
  for (const [aType, dType, mult] of typeMatchups) {
    if (mult !== 0) {
      continue
    }
    if (!pokemonData[species].types.includes(dType)) {
      continue
    }
    if (aType === moveData[move].type) {
      return false
    }
  }
  return true
}

function desireToLowerStats (ai, effectProb) {
  if (effectProb === 25) {
    return ai.desireToLowerStatTenPercentChance
  }
  if (effectProb === 51) {
    const firstFitness = fitnessValues[0].reduce((a, b) => a + b, 0)
    if (isNaN(firstFitness)) {
      return 0
    }
    return (firstFitness >> 16) & 0xFF
  }
  if (effectProb === 76) {
    const thirdFitness = fitnessValues[2].reduce((a, b) => a + b, 0)
    if (isNaN(thirdFitness)) {
      return 0
    }
    return (thirdFitness >> 8) & 0xFF
  }
  if (effectProb === 127 || effectProb === 255) {
    return 0
  }
  console.log(`Unexpected effectProb: ${effectProb}`)
  return NaN
}
