import React from 'react';
import { connect } from 'react-redux';

class Series extends React.Component {
  constructor(props) {
      super(props);
  }

  render()  {
    return(
      <div className="series">

        <div className="seriesMedia">
          <img className="seriesImg" src={this.props.serie.thumbnail_url}/>
        </div>

        <div className="seriesInfo">
          <p>{ this.props.serie.title }</p>
          <text>{this.props.serie.description}</text>
        </div>

        <i className="fa fa-angle-down"></i>

        <div className="seriesBgFade"/>
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
