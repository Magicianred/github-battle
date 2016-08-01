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
  getDefaultProps() {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState() {
    this.originalText = this.props.text;
    return{
      text: this.originalText
    }
  },
  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }, this.props.speed)
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
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
