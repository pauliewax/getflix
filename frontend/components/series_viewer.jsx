import React from 'react';
import { connect } from 'react-redux';
import { fetchSerie } from '../actions/series_actions';

class SeriesViewer extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.serieId !== this.props.serieId) {
      this.props.fetchSerie(newProps.serieId);
    }
  }


  render() {

    let name;
    let body;
    let rating;
    let year;
    let img;

    if (this.props.seriesDetail) {
      name = this.props.seriesDetail.title;
      body = this.props.seriesDetail.description;
      rating = this.props.seriesDetail.rating;
      year = this.props.seriesDetail.year;
      img = this.props.seriesDetail.url;
    }
    // debugger

    return(
      <div className="seriesViewer">
        <summary>
          <div className="viewTitle">{ name }</div>
          <section>
            <aside className="viewDetails">{year}</aside>
            <aside>{rating}</aside>
          </section>
          <main className="viewBody">
            { body }
          </main>
        </summary>
        <div className="viewerBg">
          <div className="viewerBgFade"/>
          <img src={img}></img>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeriesViewer);
