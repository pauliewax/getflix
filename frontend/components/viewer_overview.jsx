import React from 'react';
import { connect } from 'react-redux';

class SeriesOverview extends React.Component {
  constructor(props) {
      super(props);
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

    if (this.props.selected === 'overview') {
      return(
        <div className="overviewTab">
          <aside className="overviewDetails">
            <li>{year}</li>
            <li>{rating}</li>
          </aside>
          <div className="overviewBody">
            {body}
          </div>
        </div>
      );
    } else {
      return(
        <div className="overviewTab">
        </div>
      );
    }
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
