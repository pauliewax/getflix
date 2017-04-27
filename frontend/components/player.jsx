import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions/video_actions';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchVideo(this.props.params.id);
  }

  render() {

    if (this.props.video) {
      // autoplay has to be in camelCase
      return(
        <div className="player">
          <video id="videoPlayer" autoPlay>
            <source src={this.props.video.video_url} type="video/mp4"></source>
            Your browser does not video playback.
          </video>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    video: state.videos.videoDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVideo: (id) => (dispatch(fetchVideo(id)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
