import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    
  }

  render() {
    // <video></video>
    return(
      <div>SUP YOU MADE IT</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
