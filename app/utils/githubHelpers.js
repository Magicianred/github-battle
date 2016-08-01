import axios from 'axios';


function getUserInfo(username) {
  return axios.get('http://api.github.com/users/' + username)
}

function getRepos(username) {
  return axios.get('http://api.github.com/users/' + username + '/repos?per_page=100')
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) =>  prev + current.stargazers_count, 0)
}

function getPlayersData(player) {
  return getRepos(player.login)
  .then(getTotalStars)
  .then((totalStars) => (
    {
      followers: player.followers,
      totalStars: totalStars
    }
  ))
}

function calculateScores(players) {
  return [
    players[0].followers*3 + players[0].totalStars,
    players[1].followers*3 + players[1].totalStars
  ]
}

export function  getPlayerInfo(players){
    return axios.all(players.map((username) => {
      return getUserInfo(username);
    })).then((info) => {
      return info.map((user) => {
        return user.data;
      })
    }).catch((err) => {
      console.warn('Error', err);
    })
  }

export function  battle(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch((err) => {console.warn('Error in playerInfo', err)})
  }
