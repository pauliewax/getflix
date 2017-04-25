import React from 'react';
import { connect } from 'react-redux';
import Series from './series';
import SeriesViewer from './series_viewer';

class SeriesRow extends React.Component {
  constructor(props) {
      super(props);

      this.state = {selectedSerie: ''};
  }

  componentWillReceiveProps(newProps) {
    let seriesIds = this.props.row.map(serie=>serie.id);
    if (
        (newProps.seriesDetail !== this.props.seriesDetail) &&
        (seriesIds.includes(newProps.seriesDetail.id))
      ) {
      let thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
      thisViewer.classList.add('viewerShow');
    } else {
      let thisViewer = document.getElementsByClassName(`viewer-${this.props.rowId}`)[0];
      thisViewer.classList.remove('viewerShow');
    }
  }

  render()  {

    let series = this.props.row.map(serie=><li className={`serie-${serie.id} serieWrapper`} key={serie.id} ><Series  serie={serie} /></li>);

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesRow);
