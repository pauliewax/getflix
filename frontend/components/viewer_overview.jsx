import React from 'react';
import { connect } from 'react-redux';

class SeriesOverview extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    if (this.props.selected === 'overview') {
      return(
        <div className="overviewTab">
          YOU'RE RENDERING OVERVIEW
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
