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
    this.setState({inputVal: ""}, this.updateQueryString);
  }

  revealSearch() {
    document.getElementsByClassName("searchBar")[0].classList.add('revealSearch');
    document.getElementsByClassName("inputField")[0].placeholder = "Search by Title";
    document.getElementsByClassName("inputField")[0].classList.add('placeholderColor');
  }

  componentDidMount() {
    var specifiedElement = document.getElementsByClassName('searchBar')[0];

document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);

  if (!isClickInside) {
    document.getElementsByClassName("searchBar")[0].classList.remove('revealSearch');
    document.getElementsByClassName("inputField")[0].placeholder = "Search";
    document.getElementsByClassName("inputField")[0].classList.remove('placeholderColor');
  }
});
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
    // MAYBE DONT NEED THIS HERE, USEFUL TO SEE IF SEARCH WORKED FOR A WILLRECEIVEPROPS
    seriesList: state.series.seriesList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
