import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

class VideoDetail extends React.Component {
  constructor(props) {
      super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    hashHistory.push(`/watch/${this.props.video.id}`);
  }

  render() {
    let id;
    let img;
    let title;
    let body;
    let duration;
    let ep;
    let video;
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
            <i onClick={this.handleClick} className="fa fa-play"></i>
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
