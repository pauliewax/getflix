import React from 'react';
import { connect } from 'react-redux';
import { fetchGenre } from '../actions/genre_actions';

class Genre extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.props.fetchGenre(this.props.params.id);
  }

  render() {
    let seriesIds;
    if (this.props.genre.series) {
      seriesIds = this.props.genre.series.map(series=>series.id);
    } else {
      seriesIds = "";
    }

    return(
      <div>
        {seriesIds}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    genre: state.genre
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGenre: (id) => (dispatch(fetchGenre(id)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
