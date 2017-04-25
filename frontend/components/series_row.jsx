import React from 'react';
import { connect } from 'react-redux';
import Series from './series';
import SeriesViewer from './series_viewer';

class SeriesRow extends React.Component {
  constructor(props) {
      super(props);

      this.state = {selectedSerie: ''};
      this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    this.setState({selectedSerie: event.currentTarget.className});
  }

  render()  {

    let series = this.props.row.map(serie=><li onClick={this.handleClick} className={`${serie.id} serieWrapper`} key={serie.id} ><Series  serie={serie} /></li>);

    let serieId = series[0].key;
    if (this.state.selectedSerie !== '') {
      serieId = this.state.selectedSerie;
    }

    return(
      <div className="seriesRow">
        { series }

        <div className={`viewer viewer-${this.props.rowId}`}><SeriesViewer thisViewerId={`viewer-${this.props.rowId}`} serieId={serieId}/></div>
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
