import React from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../actions/genre_actions';
import { Link } from 'react-router';

class GenreBrowser extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleHover = this.handleHover.bind(this);
      this.handleLeave = this.handleLeave.bind(this);
  }

  componentWillMount() {
    this.props.fetchGenres();
  }

  handleClick() {
    let dropmenu = document.getElementsByClassName('dropdown')[0];
    dropmenu.classList.toggle('show');
  }

  handleHover() {
    let dropmenu = document.getElementsByClassName('dropdown')[0];
    dropmenu.classList.add('show');
  }

  handleLeave() {
    let dropmenu = document.getElementsByClassName('dropdown')[0];
    dropmenu.classList.remove('show');
  }

  render() {
    let genreLinks;

    if (this.props.genreList) {
      genreLinks = this.props.genreList.map(genre=><li><Link className="genreLink" key={genre.id} to={`/browse/genre/${genre.id}`}>{genre.name}</Link></li>);
    }

    return(
      <div onMouseLeave={this.handleLeave} className="genreBrowser">

        <figure>
          <div onClick={this.handleClick} ><text onMouseOver={this.handleHover} >Browse </text>
          <i className="fa fa-caret-down"></i>
          </div>
          <div onMouseOver={this.handleLeave} id="deadspace" />
        </figure>

        <section className="dropdown" >
          {genreLinks}
        </section>
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
