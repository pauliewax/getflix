import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Series from './series';
import SeriesViewer from './series_viewer';
import { fetchSerie } from '../actions/series_actions';

class SeriesRow extends React.Component {
  constructor(props) {
      super(props);

      this.handleHover = this.handleHover.bind(this);
      this.addDeadspaceFix = this.addDeadspaceFix.bind(this);
      this.removeDeadspaceFix = this.removeDeadspaceFix.bind(this);
  }

  addHover()  {
    for (var i = 0; i < this.props.row.length; i++) {
      let rowObj = document.getElementsByClassName(`serie-${this.props.row[i].id}`)[0];
      rowObj.id = "noHover";
    }
  }

  removeHover() {
    for (var i = 0; i < this.props.row.length; i++) {
      let rowObj = document.getElementsByClassName(`serie-${this.props.row[i].id}`)[0];
      rowObj.id = '';
    }
  }

  handleHover(event) {
    let thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
    // This line checks if the viewerShow class has been added, meaning the viewer is open for this row
    if (thisViewer.classList[2]) {
      this.props.fetchSerie(parseInt(event.currentTarget.classList[0].slice(6)))
      .then(this.addHover());
    } else {
      this.removeHover();
    }
  }

  addDeadspaceFix(event) {
    event.target.parentElement.id = "noHover2";
  }

  removeDeadspaceFix(event) {
    event.target.parentElement.id = '';
  }

  componentWillReceiveProps(newProps) {
    let seriesIds = this.props.row.map(serie=>serie.id);
    let thisViewer,
        selectedSerie;
    if (newProps.seriesDetail) {
      selectedSerie = `serie-${newProps.seriesDetail.id}`;
      for (var i = 0; i < this.props.row.length; i++) {
        let rowObj = document.getElementsByClassName(`serie-${this.props.row[i].id}`)[0];
        if (rowObj.classList[0] !== selectedSerie) {
          rowObj.classList.remove('highlightSerie');
        }
      }
    }

    if (
        (newProps.seriesDetail !== this.props.seriesDetail) &&
        (seriesIds.includes(newProps.seriesDetail.id))
      ) {
        thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
        thisViewer.classList.add('viewerShow');
        selectedSerie = document.getElementsByClassName(`serie-${newProps.seriesDetail.id}`)[0];
        selectedSerie.classList.add('highlightSerie');
    } else if (
      (newProps.seriesDetail === this.props.seriesDetail) &&
      (newProps.follows !== this.props.follows) &&
      (this.props.location !== '/mylist')
    ) {
      // do nothing, follows have changed but still looking at same item
    } else {
        thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
        thisViewer.classList.remove('viewerShow');
    }
  }

  render()  {

    let series = this.props.row.map(serie=><li onMouseEnter={this.handleHover} className={`serie-${serie.id} serieWrapper`} key={serie.id} ><Series serie={serie} /></li>);

    return(
      <div className="seriesRow">
            <div className="seriesStrip">
              { series }
              <div onMouseEnter={this.addDeadspaceFix} onMouseLeave={this.removeDeadspaceFix} id="clearFlex"></div>
            </div>
        <div className={`viewer viewer-${this.props.rowId}`}><SeriesViewer thisViewerClass={`viewer-${this.props.rowId}`} /></div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesDetail: state.series.seriesDetail,
    follows: state.follows,
    location: ownProps.router.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSerie: (id) => (dispatch(fetchSerie(id))),

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeriesRow));
