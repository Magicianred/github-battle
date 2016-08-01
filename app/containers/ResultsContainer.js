import React from 'react';
import Results from '../components/Results';
import { battle } from '../utils/githubHelpers';

const ResultsContainer = React.createClass({

  getInitialState() {
    return {
      isLoading: true,
      scores: [],
    };
  },
  componentDidMount() {
    battle(this.props.location.state.playersInfo)
    .then((scores) => {
      this.setState({
        isLoading: false,
        scores: scores,
      })
    })
  },
  render() {
    return (
      <Results 
      isLoading={this.state.isLoading}
      scores={this.state.scores}
      playersInfo={this.props.location.state.playersInfo}/>
    );
  }
});

export default ResultsContainer
