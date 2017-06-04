import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/series_actions';
import { hashHistory } from 'react-router';
import SeriesRow from './series_row';

class Search extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchSearch(this.props.location.query.q);
  }

  componentWillReceiveProps(newProps) {
    let lastQuery = this.props.location.query.q;
    if (newProps.location.query.q !== lastQuery) {
      this.props.fetchSearch(newProps.location.query.q);
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
    let seriesRows;
    if (this.props.seriesList) {
      let rows = this.generateRows();
      seriesRows = rows.map(row=><SeriesRow key={row[0].id} row={row} rowId={row[0].id}/>);
    }
    return(
      <div className="searchPage">
        <aside>
          <p>Search Results:</p>
        </aside>
        <main id="searchRows">
          {seriesRows}
        </main>
      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesList: state.series.seriesList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSearch: (searchQuery) => (dispatch(fetchSearch(searchQuery)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
