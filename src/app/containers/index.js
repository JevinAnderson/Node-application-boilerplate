import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class Application extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
// componentWillMount(){}
// componentDidMount(){}
// componentWillReceiveProps(nextProps) {}
// shouldComponentUpdate(nextProps, nextState) true
// componentWillUpdate(nextProps, nextState) {}
// componentDidUpdate(prevProps, prevState) {}
// componentWillUnmount() {}
  render(){
    return (
      <div className="application">
        Hello world!
      </div>
    );
  }
};

Application.propTypes = {};

Application.defaultProps = {};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
