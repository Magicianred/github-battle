import React, { PropTypes } from 'react';

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
};

const Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function() {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState: function() {
    this.originalText = this.props.text;
    return{
      text: this.originalText
    }
  },
  componentDidMount: function() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(function() {
      if(this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed)
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return(
      <div style={styles.container}>
        <p style={styles.content}>
          {this.state.text}
        </p>
      </div>
    );
  }
});

export default Loading
