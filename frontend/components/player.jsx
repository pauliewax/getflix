import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions/video_actions';
import PlayerControls from './player_controls';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

 componentDidMount() {
    this.props.fetchVideo(this.props.params.id);
  }

  handleBack() {
    this.props.router.goBack();
  }

  render() {
    if (this.props.video) {
      if (this.props.video.id === parseInt(this.props.params.id)) {
        return(
          <div className="player">
            <i onClick={this.handleBack} className="fa fa-arrow-left"></i>
            <video id="videoPlayer" autoPlay>
              <source src={this.props.video.video_url} type="video/mp4"></source>
              Your browser does not support video playback.
            </video>
            <PlayerControls />
          </div>
        );
      } else {
        return (
          <div></div>
        );
      }
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
