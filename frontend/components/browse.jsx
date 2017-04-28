import React from 'react';
import { connect } from 'react-redux';
import { fetchAllSeries } from '../actions/series_actions';
import { fetchGenres } from '../actions/genre_actions';
import SeriesRow from './series_row';
import BrowseGenre from './browse_genre';

class Browse extends React.Component {
 constructor(props) {
   super(props);
 }

 componentWillMount() {
   this.props.fetchAllSeries().then(this.props.fetchGenres());
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

   let followedSeries = '';
   let myList = '';

   if ((this.props.follows) && (Object.keys(this.props.follows).length !== 0)) {
     followedSeries = Object.values(this.props.follows).map(follow=>follow.series);
     myList = <BrowseGenre key={`mylist-browser`} genreName={"My List"} series={followedSeries}/>;
   }


   return(
     <div className="browser" >
       <section className="browse-splash">
         <img className="splash-bg" src="http://www.pauliewax.com/wp-content/uploads/2017/04/splash-bg.png" />

         <aside>
           <img className="splash-logo" src="http://www.pauliewax.com/wp-content/uploads/2017/04/getflixoriginal.png" />
           <text>Dry air. Wet code. Escape is not defined. See how it all unfolds when the stack limit is reached in this critically acclaimed spaghetti coder.</text>
         </aside>
       </section>
       <main className="genreSection">
         { myList }
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
    follows: state.follows
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSeries: () => (dispatch(fetchAllSeries())),
    fetchGenres: () => (dispatch(fetchGenres()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
