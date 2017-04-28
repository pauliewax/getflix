import React from 'react';
import { connect } from 'react-redux';
import { fetchFollows } from '../actions/follow_actions';
import SeriesRow from './series_row';

class MyList extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.props.fetchFollows();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.follows !== this.props.follows) {
      this.props.fetchFollows();
    }
  }

  generateRows(followedSeries) {
    let allSeries = Object.assign([], followedSeries);
    let allRows =[];
    while (allSeries.length !== 0)  {
      allRows.push(allSeries.slice(0,6));
      allSeries = allSeries.slice(6);
    }
    return allRows;
  }

  render() {
    let seriesRows = [];
    let follows = [];
    let followedSeries = [];

    if (this.props.follows) {
      follows = Object.values(this.props.follows);
      followedSeries = follows.map(follow=>follow.series);
      let rows = this.generateRows(followedSeries);
      seriesRows = rows.map(row=><SeriesRow key={row[0].id} row={row} rowId={row[0].id} />);
    }

    return(
      <div className="myList" >
        <aside>
          <p>My List</p>
        </aside>
        <main>{seriesRows}</main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    follows: state.follows
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFollows: () => (dispatch(fetchFollows()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
