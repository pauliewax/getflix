import React from 'react';
import { connect } from 'react-redux';

class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seekerVal: 0, currentTime: ''};
    this.pressPlay = this.pressPlay.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.timeTracker = this.timeTracker.bind(this);
    this.resetPlayButton = this.resetPlayButton.bind(this);
  }

  componentDidMount() {
    let video = document.getElementById("videoPlayer");
    video.addEventListener("timeupdate", this.timeTracker);
    video.addEventListener("timeupdate", this.resetPlayButton);
  }

  timeTracker() {
    let video = document.getElementById("videoPlayer");
    let value = ( 100 / video.duration ) * video.currentTime;
    let timeNow = this.getPlayTime(video.currentTime);
    this.setState({seekerVal: value, currentTime: timeNow});
  }

  resetPlayButton() {
    let video = document.getElementById("videoPlayer");
    let play = document.getElementById('videoPlay');
    let pause = document.getElementById('videoPause');

    if (video.currentTime === video.duration) {
      play.classList.remove('hidePlay');
      pause.classList.add('hidePlay');
    }
  }

  componentWillUnmount() {
    let video = document.getElementById("videoPlayer");
    video.removeEventListener("timeupdate", this.timeTracker);
    video.removeEventListener("timeupdate", this.resetPlayButton);
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
    if (document.fullscreen) {
      document.exitFullscreen();
    } else if (document.webkitIsFullScreen) {
      document.webkitExitFullscreen();
    } else if (document.mozFullScreen) {
      document.mozCancelFullScreen();
    } else {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    }
  }

  toggleSound() {
    let video = document.getElementById("videoPlayer");
    let audioOn = document.getElementById('audioOn');
    let audioOff = document.getElementById('audioOff');

    if (video.muted === false) {
      video.muted = true;
      audioOn.classList.add('hidePlay');
      audioOff.classList.remove('hidePlay');
    } else {
      video.muted = false;
      audioOn.classList.remove('hidePlay');
      audioOff.classList.add('hidePlay');
    }
  }

  getPlayTime(duration) {
    let sec = Math.floor(duration % 60);
    let min = Math.floor(duration / 60);
    let hour = 0;
    if (min > 59)  {
      hour = Math.floor(min / 60);
      min = min - (hour * 60);
    }

    let secStr;
    let minStr;
    if (sec > 9) {
      secStr = (sec).toString();
    } else {
      secStr = `0${(sec).toString()}`;
    }

    if (min > 9) {
      minStr = (min).toString();
    } else {
      minStr = `0${(min).toString()}`;
    }

    let hourStr = (hour).toString();

    if (hour !== 0) {
      return `${hourStr}:${minStr}:${secStr}`;
    } else if (min < 9) {
      return `${(min).toString()}:${secStr}`;
    } else {
      return `${minStr}:${secStr}`;
    }
  }

  render() {
    let video;
    let length;
    if (document.getElementById("videoPlayer")) {
      video = document.getElementById("videoPlayer");
      length = this.getPlayTime(video.duration);
    }
    return(
      <div className="playerControls">
        <div className="playBar">
          <div className="playPause">
            <i onClick={this.pressPlay} id="videoPlay" className="fa fa-play hidePlay"></i>
            <i onClick={this.pressPlay} id="videoPause" className="fa fa-pause"></i>
          </div>
          <input onChange={this.handleSlide} type="range" id="seeker" value={this.state.seekerVal}/>
          <div className="playTime">
            <p>{this.state.currentTime}</p>
            <p>/</p>
            <p>{length}</p>
          </div>
          <div className="muteButton">
            <i onClick={this.toggleSound} id="audioOn" className="fa fa-volume-up"></i>
            <i onClick={this.toggleSound} id="audioOff" className="fa fa-volume-off hidePlay"></i>
          </div>
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
