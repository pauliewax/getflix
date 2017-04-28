import React from 'react';
import { connect } from 'react-redux';

class BrowseGenre extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(newProps) {
    debugger
  }

  render() {
    return(
      <div>

      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BrowseGenre);
