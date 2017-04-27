import React from 'react';
import { connect } from 'react-redux';

class SeriesOverview extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selected !== 'overview') {
      let thisTab = document.getElementsByClassName('overviewTab')[0];
      thisTab.classList.add('hideTab');
    } else {
      let thisTab = document.getElementsByClassName('overviewTab')[0];
      thisTab.classList.remove('hideTab');
    }
  }

  render() {

    let name;
    let body;
    let rating;
    let year;

    if (this.props.seriesDetail) {
      body = this.props.seriesDetail.description;
      rating = this.props.seriesDetail.rating;
      year = this.props.seriesDetail.year;
    }

    return(
      <div className="overviewTab">
        <i id="overviewPlay" className="fa fa-play-circle"></i>
        <aside className="overviewDetails">
          <li>{year}</li>
          <li>{rating}</li>
        </aside>
        <div className="overviewBody">
          {body}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesDetail: state.series.seriesDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesOverview);
