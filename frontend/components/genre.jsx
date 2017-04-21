import React from 'react';
import { connect } from 'react-redux';
import { fetchGenre } from '../actions/genre_actions';
import Series from './series';

class Genre extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.params.id);
  }

  render() {

    let seriesIds;

    if (this.props.genre.series) {
      seriesIds = this.props.genre.series.map(series=>series.id);
      return(
        <div className="genre">
          <aside>
            <p>{ this.props.genre.name }</p>
          </aside>
          <ul>
            { seriesIds.map(id=><Series key={id} seriesId={id} />) }
          </ul>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
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
