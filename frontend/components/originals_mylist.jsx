import React from 'react';
import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../actions/follow_actions';
import { fetchFollows } from '../actions/follow_actions';

class OriginalsMyList extends React.Component {
 constructor(props) {
   super(props);
   this.addOriginal = this.addOriginal.bind(this);
 }


 componentWillReceiveProps(newProps) {
   let followedSeriesIds = Object.values(newProps.follows).map(follow => follow.series_id);
   let plus = document.getElementsByClassName('originalPlus')[0];
   let check = document.getElementsByClassName('originalCheck')[0];
   if (followedSeriesIds.includes(256)) {
     plus.classList.add('hideMyList');
     check.classList.remove('hideMyList');
   } else  {
     plus.classList.remove('hideMyList');
     check.classList.add('hideMyList');
   }
 }

 addOriginal() {
  //  256 = seriesId of goodbadugly
   let followedSeriesIds = Object.values(this.props.follows).map(follow => follow.series_id);
   let plus = document.getElementsByClassName('originalPlus')[0];
   let check = document.getElementsByClassName('originalCheck')[0];
   if (followedSeriesIds.includes(256)) {
     let removedFollowId;
     let iterableFollows = Object.values(this.props.follows);
     for (let i = 0; i < iterableFollows.length; i++) {
       let seriesFollow = iterableFollows[i];
       if ( (seriesFollow.series_id === 256) && (this.props.user.id === seriesFollow.user_id) ) {
         removedFollowId = seriesFollow.id;
       }
     }
     this.props.deleteFollow(removedFollowId);
     plus.classList.remove('hideMyList');
     check.classList.add('hideMyList');
   } else {
     this.props.createFollow({
       user_id: this.props.user.id,
       series_id: 256
     });
     plus.classList.add('hideMyList');
     check.classList.remove('hideMyList');
   }
 }

 render()  {
   return(
     <button onClick={this.addOriginal} className="splashList">
       <i className="originalCheck hideMyList fa fa-check"></i>
       <i className="originalPlus fa fa-plus"></i>
       My List
     </button>
   );
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    follows: state.follows,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createFollow: (follow) => (dispatch(createFollow(follow))),
    deleteFollow: (followId) => (dispatch(deleteFollow(followId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OriginalsMyList);
