import React from 'react';
import { connect } from 'react-redux';

class SeriesViewer extends React.Component {
  constructor(props) {
      super(props);
      this.handleClose = this.handleClose.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {selectedTab: 'overview'};
  }

  handleClose() {
    let thisViewer = document.getElementsByClassName(this.props.thisViewerClass)[0];
    thisViewer.classList.remove('viewerShow');

    let selectedSerie = document.getElementsByClassName(`serie-${this.props.seriesDetail.id}`)[0];
    selectedSerie.classList.remove('highlightSerie');
  }

  handleSelect(e) {
    let selectedTab = e.currentTarget.innerText.toLowerCase();
    this.setState({selectedTab}, this.addHighlight(e));
  }

  addHighlight(e)  {
    e.currentTarget.classList.add('selectedBtn');
    let tabs = document.getElementsByClassName('viewTab');
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].innerText !== e.currentTarget.innerText) {
        tabs[i].classList.remove('selectedBtn');
      }
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

    return(
      <div className="seriesViewer">
<i onClick={this.handleClose} className="fa fa-times-thin viewerClose"></i>
        <div className="viewTitle">{ name }</div>

        <section className="viewerFooter">
          <detail className="viewerNav">
            <div onClick={this.handleSelect} className="viewTab">OVERVIEW</div>
            <div onClick={this.handleSelect} className="viewTab episodeBtn">EPISODES</div>
            <div onClick={this.handleSelect} className="viewTab">REVIEWS</div>
          </detail>
        </section>

        <img className="viewerBg" src={img}></img>
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
