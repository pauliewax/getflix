import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fetchAllSeries } from '../actions/series_actions';
import { fetchGenres } from '../actions/genre_actions';
import { createFollow, deleteFollow } from '../actions/follow_actions';
import SeriesRow from './series_row';
import BrowseGenre from './browse_genre';


class Browse extends React.Component {
 constructor(props) {
   super(props);
   this.addOriginal = this.addOriginal.bind(this);
   this.playOriginal = this.playOriginal.bind(this);
 }

 componentDidMount() {
   this.props.fetchAllSeries().then(this.props.fetchGenres());
 }

 playOriginal() {
  //  580 = videoId of goodbadugly
   hashHistory.push(`/watch/580`);
 }

 addOriginal() {
  //  682 = seriesId of goodbadugly
   let followedSeriesIds = Object.values(this.props.follows).map(follow => follow.series_id);
   if (followedSeriesIds.includes(682)) {
     let removedFollowId;
     let iterableFollows = Object.values(this.props.follows);
     for (let i = 0; i < iterableFollows.length; i++) {
       let seriesFollow = iterableFollows[i];
       if ( (seriesFollow.series_id === 682) && (this.props.user.id === seriesFollow.user_id) ) {
         removedFollowId = seriesFollow.id;
       }
     }
     this.props.deleteFollow(removedFollowId);
   } else {
     this.props.createFollow({
       user_id: this.props.user.id,
       series_id: 682
     });
   }
 }

 render()  {
   let seriesByGenre = {};
   let browseGenres = [];
   let genreNames = [];
   let seriesGenres = [];
   if (this.props.genres) {
     genreNames = this.props.genres.map(genre=>genre.name);
   }

   if (this.props.seriesList) {
     for (var i = 0; i < genreNames.length; i++) {
       let genreSeries = [];
       for (var j = 0; j < this.props.seriesList.length; j++) {
         if (this.props.seriesList[j].genres) {
           seriesGenres = this.props.seriesList[j].genres.map(genre=>genre.name);
         }
         if (seriesGenres.includes(genreNames[i])) {
           genreSeries.push(this.props.seriesList[j]);
         }
       }
       if (genreSeries.length !== 0) {
         seriesByGenre[genreNames[i]] = genreSeries;
       }
     }

    let filteredGenres = Object.keys(seriesByGenre);
    for (var i = 0; i < filteredGenres.length; i++) {
      browseGenres.push(<BrowseGenre key={`${genreNames[i]}-browser`} genreName={filteredGenres[i]} series={seriesByGenre[filteredGenres[i]]}/>);
    }

   }

   return(
     <div className="browser" >
       <section className="browse-splash">
         <img className="splash-bg" src="https://s3.us-east-2.amazonaws.com/getflix-pro/splash.png" />

         <aside>
           <img className="splash-logo" src="https://s3.us-east-2.amazonaws.com/getflix-pro/getflixoriginal.png" />
           <text>Dry air. Wet code. Escape is not defined. See how it all unfolds when the stack limit is reached in this critically acclaimed spaghetti coder.</text>
           <div>
             <button onClick={this.playOriginal} className="splashPlay"><i className="fa fa-play"></i>Play</button>
             <button onClick={this.addOriginal} className="splashList"><i className="fa fa-check"></i>My List</button>
           </div>
         </aside>
       </section>
       <main className="genreSection">

           { browseGenres }
       </main>
     </div>
   );
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesList: state.series.seriesList,
    genres: state.genre,
    follows: state.follows,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSeries: () => (dispatch(fetchAllSeries())),
    fetchGenres: () => (dispatch(fetchGenres())),
    createFollow: (follow) => (dispatch(createFollow(follow))),
    deleteFollow: (followId) => (dispatch(deleteFollow(followId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
