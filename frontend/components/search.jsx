import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/series_actions';

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

  render() {
    return(
      <div className="searchPage">
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
    fetchSearch: (searchQuery) => (dispatch(fetchSearch(searchQuery)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
