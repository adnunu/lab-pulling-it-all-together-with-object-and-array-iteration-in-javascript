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
          "Bismack Biyombo": {
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
  
  // ======================
  // REQUIRED FUNCTIONS
  // ======================
  
  // 3.1 Retrieve Player Information
  function numPointsScored(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName].points;
    } else {
      return game.away.players[playerName].points;
    }
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName].shoe;
    } else {
      return game.away.players[playerName].shoe;
    }
  }
  
  // 3.2 Retrieve Team Information
  function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else {
      return game.away.colors;
    }
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // 3.3 Retrieve Player Numbers and Stats
  function playerNumbers(teamName) {
    const game = gameObject();
    let players;
    if (game.home.teamName === teamName) {
      players = game.home.players;
    } else {
      players = game.away.players;
    }
    
    const jerseyNumbers = [];
    for (const playerKey in players) {
      jerseyNumbers.push(players[playerKey].number);
    }
    return jerseyNumbers;
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName];
    } else {
      return game.away.players[playerName];
    }
  }
  
  // 3.4 Advanced Challenge
  function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoeSize = 0;
    let rebounds;
    
    for (const playerKey in game.home.players) {
      if (game.home.players[playerKey].shoe > biggestShoeSize) {
        biggestShoeSize = game.home.players[playerKey].shoe;
        rebounds = game.home.players[playerKey].rebounds;
      }
    }
    
    for (const playerKey in game.away.players) {
      if (game.away.players[playerKey].shoe > biggestShoeSize) {
        biggestShoeSize = game.away.players[playerKey].shoe;
        rebounds = game.away.players[playerKey].rebounds;
      }
    }
    
    return rebounds;
  }

function doesLongNameStealATon() {
  const longestNamePlayer = playerWithLongestName();
  const game = gameObject();
  
  // Get steals of player with longest name
  let longestNameSteals;
  if (game.home.players[longestNamePlayer]) {
    longestNameSteals = game.home.players[longestNamePlayer].steals;
  } else {
    longestNameSteals = game.away.players[longestNamePlayer].steals;
  }
  
  // Check all players to see if anyone has more steals
  for (const playerName in game.home.players) {
    if (playerName !== longestNamePlayer && 
        game.home.players[playerName].steals > longestNameSteals) {
      return false;
    }
  }
  
  for (const playerName in game.away.players) {
    if (playerName !== longestNamePlayer && 
        game.away.players[playerName].steals > longestNameSteals) {
      return false;
    }
  }
  
  return true;
}
  


// Test
console.log("Points (Ben Gordon):", numPointsScored("Ben Gordon"));
console.log("Shoe (Mason Plumlee):", shoeSize("Mason Plumlee"));
console.log("Colors (Nets):", teamColors("Brooklyn Nets"));
console.log("Team names:", teamNames());
console.log("Jersey numbers (Hornets):", playerNumbers("Charlotte Hornets"));
console.log("Stats (Jason Terry):", playerStats("Jason Terry"));
console.log("Rebounds (largest shoe):", bigShoeRebounds());
