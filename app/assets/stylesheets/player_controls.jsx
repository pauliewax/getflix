import React from 'react';
import { connect } from 'react-redux';

class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.pressPlay = this.pressPlay.bind(this);
  }

  pressPlay() {
    let video = document.getElementById("videoPlayer");
    if (video.paused === true) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    return(
      <div className="playerControls">
        <main className="controlDock">
          <i onClick={this.pressPlay} id="videoPlay" className="fa fa-play"></i>
        </main>
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
