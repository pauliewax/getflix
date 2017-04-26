import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let img;
    if (this.props.video) {
      img = this.props.video.thumbnail_url;
    }
    return(
      <div className="videoDetail">
        <img src={img} />
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
