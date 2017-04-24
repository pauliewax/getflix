import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {inputVal: ''};
      this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
   hashHistory.push(`/search?q=${this.state.inputVal}`);
   this.setState({inputVal: event.currentTarget.value});
  }

  render() {
    return(
      <div className="searchBar">
        <i className="fa fa-search"></i>
        <section className="inputBox">
          <input className="inputField" value={this.state.inputVal} onChange={this.handleInput} placeholder="Search by Title" />
        </section>
        <div className="closeTimes" >
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
