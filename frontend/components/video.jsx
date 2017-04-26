import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.props.fetchVideos(this.props.seriesId);
  }

  render() {
    return(
      <div className="videoDetail">

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

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
