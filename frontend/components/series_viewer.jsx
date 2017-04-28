import React from 'react';
import { connect } from 'react-redux';
import SeriesOverview from './viewer_overview';
import SeriesEpisodes from './viewer_episodes';

class SeriesViewer extends React.Component {
  constructor(props) {
      super(props);
      this.handleClose = this.handleClose.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {selectedTab: 'overview'};
  }

  componentWillReceiveProps(newProps) {
    if (newProps.seriesDetail !== this.props.seriesDetail) {
      this.setState({selectedTab: 'overview'}, this.resetTabs());
      let episodeBtns = document.getElementsByClassName('episodeBtn');
      if (newProps.seriesDetail.episodes.length <= 1) {
        for (var i = 0; i < episodeBtns.length; i++) {
          episodeBtns[i].classList.add('hideTab');
        }
      } else {
        for (var i = 0; i < episodeBtns.length; i++) {
          episodeBtns[i].classList.remove('hideTab');
        }
      }
    }
  }

  handleClose() {
    let thisViewer = document.getElementsByClassName(this.props.thisViewerClass)[0];
    thisViewer.classList.remove('viewerShow');

    let selectedSerie = document.getElementsByClassName(`serie-${this.props.seriesDetail.id}`)[0];
    selectedSerie.classList.remove('highlightSerie');

    this.setState({selectedTab: 'overview'}, this.resetTabs());
  }

  resetTabs() {
      let tabs = document.getElementsByClassName('viewTab');
      for (var i = 0; i < tabs.length; i++) {
        if(tabs[i].innerText.toLowerCase() !== 'overview'){
          tabs[i].classList.remove('selectedBtn');
        } else {
          tabs[i].classList.add('selectedBtn');
        }
      }
  }

  handleSelect(e) {
    let selectedTab = e.currentTarget.innerText.toLowerCase();
    this.setState({selectedTab}, this.addHighlight(e.currentTarget));
  }

  addHighlight(obj)  {
    obj.classList.add('selectedBtn');
    let tabs = document.getElementsByClassName('viewTab');
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].innerText !== obj.innerText) {
        tabs[i].classList.remove('selectedBtn');
      }
    }
  }

  render() {
    let img;
    if (this.props.seriesDetail) {
      name = this.props.seriesDetail.title;
      img = this.props.seriesDetail.url;
    }

    return(
      <div className="seriesViewer">
<i onClick={this.handleClose} className="fa fa-times-thin viewerClose"></i>
        <main className="viewerContent">
          <div className="viewTitle">{ name }</div>
          <SeriesOverview selected={this.state.selectedTab} />
          <SeriesEpisodes selected={this.state.selectedTab} />
        </main>

        <section className="viewerFooter">
          <detail className="viewerNav">
            <div onClick={this.handleSelect} className="viewTab overviewBtn">OVERVIEW</div>
            <div onClick={this.handleSelect} className="viewTab episodeBtn">EPISODES</div>
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
