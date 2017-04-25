import React from 'react';
import { connect } from 'react-redux';

class SeriesViewer extends React.Component {
  constructor(props) {
      super(props);
      this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    // debugger
    let thisViewer = document.getElementsByClassName(this.props.thisViewerClass)[0];
    thisViewer.classList.remove('test');
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

    return(
      <div className="seriesViewer">
        <summary>
          <i onClick={this.handleClose} className="fa fa-times-thin viewerClose"></i>
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
            <img src={img}></img>
            <div className="viewerBgFade"/>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesViewer);
