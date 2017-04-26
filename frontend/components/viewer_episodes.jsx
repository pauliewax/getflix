import React from 'react';
import { connect } from 'react-redux';
import { fetchBySeries } from '../actions/video_actions';
import VideoDetail from './video_detail';

class SeriesEpisodes extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.seriesDetail !== this.props.seriesDetail) {
      this.props.fetchBySeries(newProps.seriesDetail.id);
    }
  }

  render() {
    let episodeDetails=[];

    if (this.props.episodes) {
      for (var i = 0; i < this.props.episodes.length; i++) {
        episodeDetails.push(<VideoDetail video={this.props.episodes[i]} />);
      }
    }


    if (this.props.selected === 'episodes') {
      return(
        <div className="episodesTab">
          { episodeDetails }
        </div>
      );
    } else {
      return(
        <div className="episodesTab">
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesDetail: state.series.seriesDetail,
    episodes: state.videos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBySeries: (seriesId) => (dispatch(fetchBySeries(seriesId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesEpisodes);
