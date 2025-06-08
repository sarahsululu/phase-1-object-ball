// src/00-objectball.js

// Part 1: Building the Object
function gameObject() {
  const game = {
    home: { 
      teamName: "Brooklyn Nets", 
      colors: ["Black", "White"], 
      players: { 
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: { 
      teamName: "Charlotte Hornets", 
      colors: ["Turquoise", "Purple"], 
      players: { 
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
  return game;
}

// --- Part 2: Building Functions ---
function numPointsScored(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (players[playerName]) {
      return players[playerName].points;
    }
  }

  return null; 
}

function shoeSize(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null;
}

function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
  return null;
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      const players = game[teamKey].players;
      const numbers = [];
      for (let player in players) {
        numbers.push(players[player].number);
      }
      return numbers;
    }
  }
  return [];
}

function playerStats(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null;
}

// Bonus Functions

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (players[player].shoe > biggestShoe) {
        biggestShoe = players[player].shoe;
        rebounds = players[player].rebounds;
      }
    }
  }

  return rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topScorer = "";

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        topScorer = player;
      }
    }
  }

  return topScorer;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }

  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  if (homePoints > awayPoints) {
    return game.home.teamName;
  } else if (awayPoints > homePoints) {
    return game.away.teamName;
  } else {
    return "Tie";
  }
}

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}

function doesLongNameStealATon() {
  const game = gameObject();
  const longestNamePlayer = playerWithLongestName();

  let maxSteals = 0;

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (players[player].steals > maxSteals) {
        maxSteals = players[player].steals;
      }
    }
  }

  // Check if player with longest name has the max steals
  const longestNamePlayerSteals = (() => {
    for (let teamKey in game) {
      const players = game[teamKey].players;
      if (players[longestNamePlayer]) {
        return players[longestNamePlayer].steals;
      }
    }
    return 0;
  })();

  return longestNamePlayerSteals === maxSteals;
}

// --- Uncomment the below lines to test the functions ---

// console.log(shoeSize("Ben Gordon")); // 15
// console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
// console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
// console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
// console.log(playerStats("Brook Lopez")); 

// console.log(bigShoeRebounds()); // rebounds of player with biggest shoe size (should be 12)
// console.log(mostPointsScored()); // player with most points ("Ben Gordon")
// console.log(winningTeam()); // team with highest total points
// console.log(playerWithLongestName()); // longest player name string
// console.log(doesLongNameStealATon()); // true or false depending on steals


