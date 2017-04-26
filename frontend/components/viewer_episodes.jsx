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

  generateRows(episodes) {
    let allEpisodes = Object.assign([], episodes);
    let allRows =[];
    while (allEpisodes.length !== 0)  {
      allRows.push(allEpisodes.slice(0,5));
      allEpisodes = allEpisodes.slice(5);
    }
    return allRows;
  }

  render() {
    let episodeRows='';

    if (this.props.episodes) {
      let rows = this.generateRows(this.props.episodes);
      episodeRows = rows.map(row=><VideoRow key={`s${this.props.seriesDetail.id}-v${row[0].id}`} row={row} />);
    }


    if (this.props.selected === 'episodes') {
      return(
        <div className="episodesTab">
          <div className="episodeCarousel">
            { episodeRows[0] }
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
