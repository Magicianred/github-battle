import axios from 'axios';


function getUserInfo(username) {
  return axios.get(`http://api.github.com/users/${username}`)
}

function getRepos(username) {
  return axios.get(`http://api.github.com/users/${username}/repos?per_page=100`)
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) =>  prev + current.stargazers_count, 0)
}

async function getPlayersData(player) {
  try {
    const repos = await getRepos(player.login)
    const totalStars = await getTotalStars(repos)
    return {
      followers: player.followers,
      totalStars
    }
  } catch (error) {
    console.warn('Error in getPlayersData', error)
  }
}

function calculateScores(players) {
  return [
    players[0].followers*3 + players[0].totalStars,
    players[1].followers*3 + players[1].totalStars
  ]
}

export async function  getPlayerInfo(players){
  try {
    const info = await Promise.all(players.map((username) => getUserInfo(username)))
    return info.map((user) => user.data)
  }
  catch(err) {
    console.warn('Error', err);
  }
}

export async function  battle(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    try {
    const data = await Promise.all([playerOneData, playerTwoData])
    const scores = await calculateScores(data)
    return scores
    } catch (err) {
    console.warn('Error in playerInfo', err)}
  }
