import React from 'react';
import styles from '../styles';

function MainContainer(props) {
  return(
     <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
     {props.children}
     </div>
  )
}

export default MainContainer
