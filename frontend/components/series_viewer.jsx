import React from 'react';
import { connect } from 'react-redux';
import { fetchSerie } from '../actions/series_actions';

class SeriesViewer extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.serieId !== this.props.serieId) {
      this.props.fetchSerie(newProps.serieId);
    }
  }


  render() {

    let name;

    if (this.props.seriesDetail) {
      name = this.props.seriesDetail.title;
    }

    return(
      <div className="seriesViewer">
        <p>{ name }</p>
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
