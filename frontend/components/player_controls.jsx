import React from 'react';
import { connect } from 'react-redux';

class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.pressPlay = this.pressPlay.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.state = {seekerVal: 0};
  }

  componentDidMount() {
    let video = document.getElementById("videoPlayer");
    video.addEventListener("timeupdate", function() {
      let value = ( 100 / video.duration ) * video.currentTime;
      this.setState({seekerVal: value});
    }.bind(this));
  }

  pressPlay() {
    let video = document.getElementById("videoPlayer");
    let play = document.getElementById('videoPlay');
    let pause = document.getElementById('videoPause');

    if (video.paused === true) {
      video.play();
      play.classList.add('hidePlay');
      pause.classList.remove('hidePlay');
    } else {
      video.pause();
      play.classList.remove('hidePlay');
      pause.classList.add('hidePlay');
    }
  }

  handleSlide(e) {
    this.setState({seekerVal: e.target.value});
    let video = document.getElementById("videoPlayer");
    let time = video.duration * (e.target.value / 100);
    video.currentTime = time;
  }

  fullScreen() {
    let video = document.getElementById("videoPlayer");
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullscreen) {
      video.mozRequestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  }

  render() {
    return(
      <div className="playerControls">
        <div className="playBar">
          <div className="playPause">
            <i onClick={this.pressPlay} id="videoPlay" className="fa fa-play hidePlay"></i>
            <i onClick={this.pressPlay} id="videoPause" className="fa fa-pause"></i>
          </div>
          <input onChange={this.handleSlide} type="range" id="seeker" value={this.state.seekerVal}/>
          <div className="fullScreen">
            <i onClick={this.fullScreen} id="videoScreen" className="fa fa-arrows-alt"></i>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControls);
