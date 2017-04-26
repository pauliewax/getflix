import React from 'react';
import { connect } from 'react-redux';
import VideoDetail from './video_detail.jsx';

class VideoRow extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let videos = this.props.row.map(video=><VideoDetail key={`v-${video.id}`} video={video} />);
    return(
      <div className="videoRow">
        { videos }
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoRow);
