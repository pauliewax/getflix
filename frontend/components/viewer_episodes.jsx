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
    let episodeRows;
    if (this.props.episodes) {
      let rows = this.generateRows(this.props.episodes);
      episodeRows = rows.map(row=><div className="rowWrapper" key={`s${this.props.seriesDetail.id}-v${row[0].id}`}><VideoRow row={row} /></div>);
    }

    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 1,
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
    episodes: state.videos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBySeries: (seriesId) => (dispatch(fetchBySeries(seriesId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesEpisodes);
