import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayerInfo } from '../utils/githubHelpers';

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  async componentDidMount(){
    const { query } = this.props.location;
    try {
    const players = await getPlayerInfo([query.playerOne, query.playerTwo])
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    } catch (error) {
      console.warn('Error in ConfirmBattleContainer', error)
    }
  },
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render() {
    return(
      <ConfirmBattle 
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handleInitiateBattle}
      playersInfo={this.state.playersInfo} />
    )
  }
});

export default ConfirmBattleContainer
