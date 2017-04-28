import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { createFollow, deleteFollow } from '../actions/follow_actions';

class SeriesOverview extends React.Component {
  constructor(props) {
      super(props);
      this.handlePlay = this.handlePlay.bind(this);
      this.addFollow = this.addFollow.bind(this);
      this.removeFollow = this.removeFollow.bind(this);
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

  addFollow(e) {
    this.props.createFollow({
      user_id: this.props.user.id,
      series_id: this.props.seriesDetail.id
    });
    //  dont need this logic do the hiding and showing
    // in props per viewer for each seriesDetail
    // let plus = e.currentTarget;
    // plus.classList.add('hideMyList');
  }

  removeFollow(e) {
    let removedFollowId;
    let iterableFollows = Object.values(this.props.follows);
    debugger
    for (var i = 0; i < iterableFollows.length; i++) {
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
          <i onClick={this.removeFollow} id="overviewCheck" className="fa fa-check-circle"></i>
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
    user: state.session.currentUser,
    follows: state.follows
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createFollow: (follow) => (dispatch(createFollow(follow))),
    deleteFollow: (followId) => (dispatch(deleteFollow(followId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesOverview);
