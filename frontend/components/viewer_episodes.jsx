import React from 'react';
import { connect } from 'react-redux';
import { fetchBySeries } from '../actions/video_actions';
import VideoRow from './video_row';

class SeriesEpisodes extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.seriesDetail !== this.props.seriesDetail) {
      this.props.fetchBySeries(newProps.seriesDetail.id);
    }

    if (newProps.selected !== 'episodes') {
      let thisTab = document.getElementsByClassName('episodesTab')[0];
      thisTab.classList.add('hideTab');
    } else {
      let thisTab = document.getElementsByClassName('episodesTab')[0];
      thisTab.classList.remove('hideTab');
    }
  }

  generateRows(episodeDetails) {
    let allEpisodes = Object.assign([], episodeDetails);
    let allRows =[];
    while (allEpisodes.length !== 0)  {
      allRows.push(allEpisodes.slice(0,5));
      allEpisodes = allEpisodes.slice(5);
    }
    return allRows;
  }

  render() {
    let episodeDetails=[];
    let episodeRows;

    if (this.props.episodes) {
      for (var i = 0; i < this.props.episodes.length; i++) {
        let uniKey = `s${this.props.seriesDetail.id}-e${this.props.episodes[i].id}`;
        episodeDetails.push(<VideoDetail key={uniKey} video={this.props.episodes[i]} />);

        let rows = this.generateRows(episodeDetails);
        episodeRows = rows.map(row=><VideoRow key={row[0].id} row={row} />);
      }


    }


    if (this.props.selected === 'episodes') {
      return(
        <div className="episodesTab">
          <div className="episodeCarousel">
            { episodeDetails }
          </div>
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
