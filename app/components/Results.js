import React, { PropTypes } from 'react';
import styles from '../styles';
import { Link } from 'react-router';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';
import Loading from './Loading';

function StartOver() {
  return(
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Next battle</button>
          </Link>
      </div>
  )
}
function Results({isLoading, scores, playersInfo}) {
  if (isLoading === true) {
    return(
      <Loading speed={100} text='Wait for it'/>
    )
  }

  if (scores[0] === scores[1]) {
    <MainContainer>
        <h1>Results</h1>
        <StartOver />
        </MainContainer>
  }

  const winningIndex = scores[0] > scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 1 ? 0 : 1;
  return (
    <MainContainer>
        <h1>Results</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Winner'>
            <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Loser'>
            <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]} />
          </UserDetailsWrapper>
        </div>
        <StartOver />
        </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
