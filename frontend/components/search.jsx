import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/series_actions';
import { hashHistory } from 'react-router';

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

    if (newProps.location.query.q === '') {
      hashHistory.push('/browse');
    }
  }

  render() {
    let seriesNames = "";
    if (this.props.seriesList) {
      seriesNames = this.props.seriesList.map(serie=>serie.title).join(" | ");
    }
    return(
      <div className="searchPage">
        <text>
          {seriesNames}
        </text>
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
