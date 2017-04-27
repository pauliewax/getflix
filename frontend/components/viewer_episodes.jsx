import React from 'react';
import { connect } from 'react-redux';
import { fetchBySeries } from '../actions/video_actions';
import VideoRow from './video_row';
import Slider from 'react-slick';

class SeriesEpisodes extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.seriesDetail !== this.props.seriesDetail) {
      this.props.fetchBySeries(newProps.seriesDetail.id);
    }

    let episodeTabs = document.getElementsByClassName('episodesTab');

    if (newProps.selected !== 'episodes') {
      for (var i = 0; i < episodeTabs.length; i++) {
        episodeTabs[i].classList.add('hideTab');
      }
    } else {
      for (var i = 0; i < episodeTabs.length; i++) {
        episodeTabs[i].classList.remove('hideTab');
      }
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
    let episodeRows = [];
    if (this.props.episodes) {
      let rows = this.generateRows(this.props.episodes);
      episodeRows = rows.map(row=><div className="rowWrapper" key={`s${this.props.seriesDetail.id}-v${row[0].id}`}><VideoRow row={row} /></div>);
    }

    const settings = {
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
      draggable: false,
      dots: false,
    };

    if (episodeRows.length > 0) {
      return(
        <div className="episodesTab">
            <Slider className="episodeCarousel" {...settings}>
              { episodeRows }
            </Slider>
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
    episodes: state.videos.videoList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBySeries: (seriesId) => (dispatch(fetchBySeries(seriesId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesEpisodes);
