
// COMPLETE gameObject function - MUST be defined first
function gameObject() {
  return {
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
}

// Basic functions
function numPointsScored(playerName) {
  const game = gameObject();
  
  // Check home team
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  }
  
  // Check away team
  if (game.away.players[playerName]) {
    return game.away.players[playerName].points;
  }
  
  return 0;
}

function shoeSize(playerName) {
  const game = gameObject();
  
  if (game.home.players[playerName]) {
    return game.home.players[playerName].shoe;
  }
  
  if (game.away.players[playerName]) {
    return game.away.players[playerName].shoe;
  }
  
  return 0;
}

function teamColors(teamName) {
  const game = gameObject();
  
  if (game.home.teamName === teamName) {
    return game.home.colors;
  }
  
  if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  
  return [];
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  
  if (game.home.teamName === teamName) {
    return Object.values(game.home.players).map(player => player.number);
  }
  
  if (game.away.teamName === teamName) {
    return Object.values(game.away.players).map(player => player.number);
  }
  
  return [];
}

function playerStats(playerName) {
  const game = gameObject();
  
  if (game.home.players[playerName]) {
    return game.home.players[playerName];
  }
  
  if (game.away.players[playerName]) {
    return game.away.players[playerName];
  }
  
  return {};
}

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;
  
  // Check home team
  for (const playerName in game.home.players) {
    const player = game.home.players[playerName];
    if (player.shoe > biggestShoe) {
      biggestShoe = player.shoe;
      rebounds = player.rebounds;
    }
  }
  
  // Check away team
  for (const playerName in game.away.players) {
    const player = game.away.players[playerName];
    if (player.shoe > biggestShoe) {
      biggestShoe = player.shoe;
      rebounds = player.rebounds;
    }
  }
  
  return rebounds;
}

// Don't forget to include the bonus functions too:
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topScorer = '';
  
  // Check both teams
  for (const team of [game.home, game.away]) {
    for (const playerName in team.players) {
      if (team.players[playerName].points > maxPoints) {
        maxPoints = team.players[playerName].points;
        topScorer = playerName;
      }
    }
  }
  
  return topScorer;
}

function winningTeam() {
  const game = gameObject();
  
  const homePoints = Object.values(game.home.players)
    .reduce((total, player) => total + player.points, 0);
  
  const awayPoints = Object.values(game.away.players)
    .reduce((total, player) => total + player.points, 0);
  
  if (homePoints > awayPoints) {
    return game.home.teamName;
  } else if (awayPoints > homePoints) {
    return game.away.teamName;
  } else {
    return "It's a tie!";
  }
}

function playerWithLongestName() {
  const game = gameObject();
  let longestName = '';
  
  for (const team of [game.home, game.away]) {
    for (const playerName in team.players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }
  
  return longestName;
}

function doesLongNameStealATon() {
  const game = gameObject();
  let longestName = '';
  let maxNameLength = 0;
  let mostStealsPlayer = '';
  let maxSteals = 0;
  
  for (const team of [game.home, game.away]) {
    for (const playerName in team.players) {
      const player = team.players[playerName];
      
      // Check for longest name
      if (playerName.length > maxNameLength) {
        maxNameLength = playerName.length;
        longestName = playerName;
      }
      
      // Check for most steals
      if (player.steals > maxSteals) {
        maxSteals = player.steals;
        mostStealsPlayer = playerName;
      }
    }
  }
  
  return longestName === mostStealsPlayer;
}

// Export functions if needed (check your test file)
// If tests are failing with "function is not defined", add:
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    gameObject,
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    playerWithLongestName,
    doesLongNameStealATon
  };
}
