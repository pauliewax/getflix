import React from 'react';
import { connect } from 'react-redux';
import Series from './series';
import SeriesViewer from './series_viewer';
import { fetchSerie } from '../actions/series_actions';

class SeriesRow extends React.Component {
  constructor(props) {
      super(props);

      this.state = {selectedSerie: ''};
      this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {
    let thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
    // This line checks if the viewerShow class has been added, meaning the viewer is open for this row
    if (thisViewer.classList[2]) {
      this.props.fetchSerie(parseInt(event.currentTarget.classList[0].slice(6)));

      for (var i = 0; i < this.props.row.length; i++) {
        let rowObj = document.getElementsByClassName(`serie-${this.props.row[i].id}`)[0];
        rowObj.id = "noHover";
      }
    } else {
      for (var i = 0; i < this.props.row.length; i++) {
        let rowObj = document.getElementsByClassName(`serie-${this.props.row[i].id}`)[0];
        rowObj.id = '';
      }
    }
  }

  componentWillReceiveProps(newProps) {
    let seriesIds = this.props.row.map(serie=>serie.id);
    let thisViewer;
    if (
        (newProps.seriesDetail !== this.props.seriesDetail) &&
        (seriesIds.includes(newProps.seriesDetail.id))
      ) {
        thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
      thisViewer.classList.add('viewerShow');
    } else {
        thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
      thisViewer.classList.remove('viewerShow');
    }
  }

  render()  {

    let series = this.props.row.map(serie=><li onMouseOver={this.handleHover} className={`serie-${serie.id} serieWrapper`} key={serie.id} ><Series serie={serie} /></li>);

    return(
      <div className="seriesRow">
            <div className="seriesStrip">
              { series }
            </div>

        <div className={`viewer viewer-${this.props.rowId}`}><SeriesViewer thisViewerClass={`viewer-${this.props.rowId}`} /></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeriesRow);
