import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let img;
    let title;
    let body;
    let duration;
    let ep;

    if (this.props.video) {
      img = this.props.video.thumbnail_url;
      title = this.props.video.title;
      body = this.props.video.description;
      duration = this.props.video.length;
      ep = this.props.video.episode_num;
    }
    return(
      <div className="videoDetail">
          <div className="thumb">
            <i className="fa fa-play"></i>
            <div>{ep}</div>
            <img src={img} />
          </div>
        <div className="videoInfo">
          <div className="videoHeader">
            <div>{title}</div>
            <div>{duration}</div>
          </div>
          <div className="videoBody">
            {body}
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
