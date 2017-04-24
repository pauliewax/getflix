import React from 'react';
import { connect } from 'react-redux';
import Series from './series';

class SeriesRow extends React.Component {
  constructor(props) {
      super(props);
  }


  render()  {

    let series = this.props.row.map(serie=><Series key={serie.id} serie={serie} />);
    return(
      <div className="seriesRow">
        { series }
        <aside className="clearFlex"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeriesRow);
