import React from 'react';
import { connect } from 'react-redux';
import SeriesRow from './series_row';

class BrowseGenre extends React.Component {
  constructor(props) {
      super(props);
  }

  generateRows(series) {
    let allSeries = Object.assign([], series);
    let allRows =[];
    while (allSeries.length !== 0)  {
      allRows.push(allSeries.slice(0,6));
      allSeries = allSeries.slice(6);
    }
    return allRows;
  }

  render() {
    let seriesRows = [];
    if (this.props.series) {
      let rows = this.generateRows(this.props.series);
      seriesRows = rows.map(row=><SeriesRow key={row[0].id} row={row} rowId={row[0].id}/>);
    }

    return(
      <div className="browseGenre">
        <div className="browseGenreTitle">{this.props.genreName}</div>
        { seriesRows[0] }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseGenre);
