import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fetchAllSeries } from '../actions/series_actions';
import { fetchGenres } from '../actions/genre_actions';
import SeriesRow from './series_row';
import BrowseGenre from './browse_genre';
import OriginalsMyList from './originals_mylist';


class Browse extends React.Component {
 constructor(props) {
   super(props);
   this.playOriginal = this.playOriginal.bind(this);
 }

 componentDidMount() {
   this.props.fetchAllSeries().then(this.props.fetchGenres());
 }

 playOriginal() {
  //  214 = videoId of goodbadugly
   hashHistory.push(`/watch/214`);
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
             <OriginalsMyList />
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
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSeries: () => (dispatch(fetchAllSeries())),
    fetchGenres: () => (dispatch(fetchGenres())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
