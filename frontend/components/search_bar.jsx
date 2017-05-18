import React from 'react';
import { connect } from 'react-redux';
import { hashHistory, withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {inputVal: ''};
      this.handleInput = this.handleInput.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.revealSearch = this.revealSearch.bind(this);
      this.searchSlide = this.searchSlide.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.searchSlide);
    if (this.props.queryString !== '') {
      this.revealSearch();
      this.setState({inputVal: this.props.queryString});
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location !== '/search') {
      this.setState({inputVal: ''});
    }
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value}, this.updateQueryString);
  }

  updateQueryString() {
    if (this.state.inputVal !== '') {
      hashHistory.push(`/search?q=${this.state.inputVal}`);
    } else {
      hashHistory.push('/browse');
    }
  }

  handleClick() {
    this.setState({inputVal: ''}, this.updateQueryString);
  }

  revealSearch() {
    document.getElementsByClassName("searchBar")[0].classList.add('revealSearch');
    document.getElementsByClassName("inputField")[0].placeholder = "Search by Title";
    document.getElementsByClassName("inputField")[0].classList.add('placeholderColor');
  }

  searchSlide() {
    let searchbar = document.getElementsByClassName('searchBar')[0];
    let clickedsearch = searchbar.contains(event.target);
    if (!clickedsearch && this.state.inputVal === '') {
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
          <img src='http://www.pauliewax.com/wp-content/uploads/2017/05/multiply.png' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.router.location.pathname,
    queryString: ownProps.router.location.search.slice(3)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
