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
   this.setState({inputVal: event.currentTarget.value});
  }

  render() {
    return(
      <div className="searchBar">
        <input value={this.state.inputVal} onChange={this.handleInput} placeholder="Search by Title" />
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
