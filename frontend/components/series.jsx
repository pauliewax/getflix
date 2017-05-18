import React from 'react';
import { connect } from 'react-redux';
import { fetchSerie } from '../actions/series_actions';
import { hashHistory } from 'react-router';

class Series extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handlePlay = this.handlePlay.bind(this);
  }

  handleClick() {
    this.props.fetchSerie(this.props.serie.id);
  }

  handlePlay() {
    if (this.props.serie.firstEp[0]) {
      hashHistory.push(`/watch/${this.props.serie.firstEp[0].id}`);
    } else {
      hashHistory.push(`/watch/39`);
      // remove RICKROLL
    }
  }

  render()  {
    return(
      <div className="series">

        <i onClick={this.handlePlay} id="seriesPlay" className="fa fa-play"></i>
        <div className="seriesMedia">
          <div className="imageScaler"></div>
          <img className="seriesImg" src={this.props.serie.thumbnail_url}/>
          <div className="seriesBgFade"/>
        </div>

        <div className="seriesInfo">
          <p>{ this.props.serie.title }</p>
          <text>{this.props.serie.description}</text>
        </div>

        <i onClick={this.handleClick} className="fa fa-angle-down"></i>
        <i className="fa fa-caret-down"></i>

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
    fetchSerie: (id) => (dispatch(fetchSerie(id)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Series);
