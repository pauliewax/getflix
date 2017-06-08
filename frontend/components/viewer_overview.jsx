import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { createFollow, deleteFollow } from '../actions/follow_actions';
import { fetchFollows } from '../actions/follow_actions';

class SeriesOverview extends React.Component {
  constructor(props) {
      super(props);
      this.handlePlay = this.handlePlay.bind(this);
      this.addFollow = this.addFollow.bind(this);
      this.removeFollow = this.removeFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchFollows();
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
    if (newProps.seriesDetail) {
      let followedSeriesIds = Object.values(newProps.follows).map(follow => follow.series_id);
      let pluses = document.getElementsByClassName('overviewPlus');
      let checks = document.getElementsByClassName('overviewCheck');
      if (followedSeriesIds.includes(newProps.seriesDetail.id)) {
        for (var i = 0; i < pluses.length; i++) {
          pluses[i].classList.add('hideMyList');
        }

        for (var i = 0; i < checks.length; i++) {
          checks[i].classList.remove('hideMyList');
        }
      } else {
        for (var i = 0; i < pluses.length; i++) {
          pluses[i].classList.remove('hideMyList');
        }

        for (var i = 0; i < checks.length; i++) {
          checks[i].classList.add('hideMyList');
        }
      }
    }
  }

  handlePlay() {
    hashHistory.push(`/watch/${this.props.seriesDetail.firstEp[0].id}`);
  }

  addFollow(e) {
    this.props.createFollow({
      user_id: this.props.user.id,
      series_id: this.props.seriesDetail.id
    });
  }

  removeFollow(e) {
    let removedFollowId;
    let iterableFollows = Object.values(this.props.follows);
    for (let i = 0; i < iterableFollows.length; i++) {
      let seriesFollow = iterableFollows[i];
      let thisSeries = this.props.seriesDetail.id;
      if ( (seriesFollow.series_id === thisSeries) && (this.props.user.id === seriesFollow.user_id) ) {
        removedFollowId = seriesFollow.id;
      }
    }
    this.props.deleteFollow(removedFollowId);
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
          <i onClick={this.removeFollow} className="overviewCheck fa fa-check-circle"></i>
          <i onClick={this.addFollow} className="overviewPlus fa fa-plus-circle"></i>
          <div className="overviewListText">MY  LIST</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesDetail: state.series.seriesDetail,
    user: state.session.currentUser,
    follows: state.follows
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createFollow: (follow) => (dispatch(createFollow(follow))),
    deleteFollow: (followId) => (dispatch(deleteFollow(followId))),
    fetchFollows: () => (dispatch(fetchFollows()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesOverview);
