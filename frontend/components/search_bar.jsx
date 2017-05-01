import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {inputVal: ''};
      this.handleInput = this.handleInput.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.revealSearch = this.revealSearch.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value}, this.updateQueryString);
  }

  updateQueryString() {
    hashHistory.push(`/search?q=${this.state.inputVal}`);
  }

  handleClick() {
    document.getElementsByClassName("searchBar")[0].classList.remove('revealSearch');
    document.getElementsByClassName("inputField")[0].placeholder = "Search";
    document.getElementsByClassName("inputField")[0].classList.remove('placeholderColor');
    this.setState({inputVal: ""}, this.updateQueryString);
  }

  revealSearch() {
    document.getElementsByClassName("searchBar")[0].classList.add('revealSearch');
    document.getElementsByClassName("inputField")[0].placeholder = "Search by Title";
    document.getElementsByClassName("inputField")[0].classList.add('placeholderColor');
  }

  componentDidMount() {

    document.addEventListener('click', this.searchSlide);
  }

  searchSlide() {
    let searchbar = document.getElementsByClassName('searchBar')[0];
    let clickedsearch = searchbar.contains(event.target);
    if (!clickedsearch) {
      document.getElementsByClassName("searchBar")[0].classList.remove('revealSearch');
      document.getElementsByClassName("inputField")[0].placeholder = "Search";
      document.getElementsByClassName("inputField")[0].classList.remove('placeholderColor');
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.searchSlide);
  }

  render() {
    return(
      <div className="searchBar">
        <i className="fa fa-search"></i>
        <section className="inputBox">
          <input onClick={this.revealSearch} className="inputField" value={this.state.inputVal} onChange={this.handleInput} placeholder="Search" />
        </section>
        <div onClick={this.handleClick} className="closeBtn" >
          <i className="fa fa-times-thin"></i>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
