import React from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../actions/genre_actions';
import { Link } from 'react-router';

class GenreBrowser extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.props.fetchGenres();
  }

  render() {
    let genreLinks;

    if (this.props.genreList) {
      genreLinks = this.props.genreList.map(genre=><Link key={genre.id} to={`/browse/genre/${genre.id}`}>{genre.name}</Link>);
    }

    return(
      <div>
        {genreLinks}
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    genreList: state.genre
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGenres: () => (dispatch(fetchGenres()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreBrowser);
