import React from 'react';
import { connect } from 'react-redux';
import { fetchSerie } from '../actions/series_actions';

class SeriesViewer extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesDetail: state.series.seriesDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSerie: (id) => (dispatch(fetchSerie(id)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesViewer);
