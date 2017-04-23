import React from 'react';
import { connect } from 'react-redux';
import { fetchSeries } from '../actions/series_actions';
import Series from './series';

class Genre extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.props.fetchSeries(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.fetchSeries(newProps.params.id);
    }
  }

  generateRows(series) {
    let allSeries;
    let seriesRows =[];
    if (this.props.seriesList.length !== 0) {
      allSeries = Object.assign([], this.props.seriesList);
      while (allSeries.length !== 0)  {
        seriesRows.push(allSeries.slice(0,4));
        allSeries = allSeries.slice(4);
      }
    }
  }

  render() {
    let genreName;
    let seriesButtons;

    if (this.props.seriesList) {
      genreName = (this.props.seriesList.length === 0 ? "No Results" : this.props.seriesList[0].genre);
      seriesButtons = this.props.seriesList.map(serie=><Series key={serie.id} serie={serie} />);
    }

    return(
      <div className="genre" >
        <aside>
          <p>{genreName}</p>
        </aside>
        <main>{seriesButtons}</main>
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
