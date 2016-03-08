var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
  ? <p>Loading</p>
  : <p>Fire at will</p>
}

module.exports = ConfirmBattle;
