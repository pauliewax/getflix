import React from 'react';
import { connect } from 'react-redux';

class SeriesEpisodes extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    if (this.props.selected === 'episodes') {
      return(
        <div className="episodesTab">
          YOU'RE RENDERING EPISODES
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
    seriesDetail: state.series.seriesDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesEpisodes);
