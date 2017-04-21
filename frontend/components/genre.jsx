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
    return(
      <div>
        { this.props.genre.name }
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
