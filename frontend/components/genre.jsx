import React from 'react';
import { connect } from 'react-redux';
import { fetchSeries } from '../actions/series_actions';
import SeriesRow from './series_row';

class Genre extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchSeries(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.fetchSeries(newProps.params.id);
    }
  }

  generateRows() {
    let allSeries = Object.assign([], this.props.seriesList);
    let allRows =[];
    while (allSeries.length !== 0)  {
      allRows.push(allSeries.slice(0,6));
      allSeries = allSeries.slice(6);
    }
    return allRows;
  }

  render() {
    let genreName;
    let seriesRows;

    if (this.props.seriesList) {
      genreName = (this.props.seriesList.length === 0 ? "No Results" : this.props.seriesList[0].genre);
      let rows = this.generateRows();
      seriesRows = rows.map(row=><SeriesRow key={row[0].id} row={row} rowId={row[0].id} />);
    }

    return(
      <div className="genre" >
        <aside>
          <p>{genreName}</p>
        </aside>
        <main id="genreRows">{seriesRows}</main>
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
