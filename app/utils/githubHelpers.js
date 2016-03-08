var axios = require('axios');


function getUserInfo(username) {
  return axios.get('http://api.github.com/users/' + username)
}
var helpers = {
  getPlayerInfo: function(players){
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info){
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error', err);
    })
  }
};

module.exports = helpers;
