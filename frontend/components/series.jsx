import React from 'react';
import { connect } from 'react-redux';

class Series extends React.Component {
  constructor(props) {
      super(props);
  }

  render()  {
    return(
      <div className="series">
          <div className="aspectratio"></div>
          <img className="thumbnail" src={this.props.serie.thumbnail_url}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Series);
