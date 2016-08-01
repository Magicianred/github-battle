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
  async componentDidMount() {
    try {
    const scores = await battle(this.props.location.state.playersInfo)
      this.setState({
        isLoading: false,
        scores: scores,
      })
    } catch (error) {
      console.warn('Error in ResultsContainer', error)
    }
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
