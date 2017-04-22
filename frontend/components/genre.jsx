import React from 'react';
import { connect } from 'react-redux';
import { fetchSeries } from '../actions/series_actions';

class Genre extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchSeries(this.props.params.id);
  }

  render() {
    let seriesInfo;

    if (this.props.seriesList) {
      seriesInfo = this.props.seriesList.map(serie=><img src={serie.thumbnail_url} />);
    } else {
      seriesInfo = "";
    }

    return(
      <div className="genre" >
        <aside>
          <p>{seriesInfo}</p>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesList: state.series.seriesList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSeries: (genreId) => (dispatch(fetchSeries(genreId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
