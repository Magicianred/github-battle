import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayerInfo } from '../utils/githubHelpers';

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  componentDidMount: function(){
    { query } = this.props.location;
    getPlayerInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function() {
    return(
      <ConfirmBattle 
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handleInitiateBattle}
      playersInfo={this.state.playersInfo} />
    )
  }
});

export default ConfirmBattleContainer
