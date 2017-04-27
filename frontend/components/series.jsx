import React from 'react';
import { connect } from 'react-redux';
import { fetchSerie } from '../actions/series_actions';

class Series extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let thisSerie = document.getElementsByClassName(`serie-${this.props.serie.id}`)[0];
    if (newProps.seriesDetail) {
      if ((newProps.seriesDetail.id === this.props.serie.id) && (window.lastSelected !== this.props.serie.id)) {
        thisSerie.classList.add('highlightSerie');
      } else {
        thisSerie.classList.remove('highlightSerie');
      }
    }
  }

  componentWillUnmount() {
    let thisSerie = document.getElementsByClassName(`serie-${this.props.serie.id}`)[0];
    if (this.checkForHighlighting(thisSerie)) {
      window.lastSelected = this.props.serie.id;
    }
  }

  checkForHighlighting(obj)  {
    for (var i = 0; i < obj.classList.length; i++) {
      if  (obj.classList[i] === 'highlightSerie') {
        return true;
      }
    }
    return false;
  }

  handleClick() {
    this.props.fetchSerie(this.props.serie.id);
  }

  render()  {
    return(
      <div className="series">

        <i id="seriesPlay" className="fa fa-play"></i>
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
