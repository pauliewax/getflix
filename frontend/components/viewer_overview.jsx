import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { createFollow } from '../actions/follow_actions';

class SeriesOverview extends React.Component {
  constructor(props) {
      super(props);
      this.handlePlay = this.handlePlay.bind(this);
      this.addFollow = this.addFollow.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let overviewTabs = document.getElementsByClassName('overviewTab');
    if (newProps.selected !== 'overview') {
      for (var i = 0; i < overviewTabs.length; i++) {
        overviewTabs[i].classList.add('hideTab');
      }
    } else {
      for (var i = 0; i < overviewTabs.length; i++) {
        overviewTabs[i].classList.remove('hideTab');
      }
    }
  }

  handlePlay() {
    hashHistory.push(`/watch/${this.props.seriesDetail.firstEp[0].id}`);
  }

  addFollow() {
    this.props.createFollow({
      user_id: this.props.user.id,
      series_id: this.props.seriesDetail.id
    });
  }

  render() {

    let name;
    let body;
    let rating;
    let year;

    if (this.props.seriesDetail) {
      body = this.props.seriesDetail.description;
      rating = this.props.seriesDetail.rating;
      year = this.props.seriesDetail.year;
    }

    return(
      <div className="overviewTab">
        <i onClick={this.handlePlay} id="overviewPlay" className="fa fa-play-circle"></i>
        <aside className="overviewDetails">
          <li>{year}</li>
          <li>{rating}</li>
        </aside>
        <div className="overviewBody">
          {body}
        </div>
        <div className="overviewMyList">
          <i onClick={this.addFollow} id="overviewPlus" className="fa fa-plus-circle"></i>
          <div className="overviewListText">MY  LIST</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesDetail: state.series.seriesDetail,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createFollow: (follow) => (dispatch(createFollow(follow)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesOverview);
