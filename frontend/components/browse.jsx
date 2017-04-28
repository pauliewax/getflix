import React from 'react';
import { connect } from 'react-redux';
import { fetchAllSeries } from '../actions/series_actions';
import { fetchGenres } from '../actions/genre_actions';
import SeriesRow from './series_row';

class Browse extends React.Component {
 constructor(props) {
   super(props);
 }

 componentWillMount() {
   this.props.fetchAllSeries().then(this.props.fetchGenres());
 }

 generateRows() {
   let allSeries = Object.assign([], this.props.seriesList);
   let allRows =[];
   while (allSeries.length !== 0)  {
     allRows.push(allSeries.slice(0,6));
     allSeries = allSeries.slice(6);
   }
   return allRows;
 }

 render()  {
   let seriesRows = [];
   let genreNames = this.props.genres.map(genre=>genre.name);
   if (this.props.seriesList) {
     for (var i = 0; i < genreNames.length; i++) {
       let genreSeries = [];
       for (var j = 0; j < this.props.seriesList.length; j++) {
         let seriesGenres = this.props.seriesList[j].genres.map(genre=>genre.name);
         if (seriesGenres.includes(genreNames[i])) {
           genreSeries.push(this.props.seriesList[j]);
         }
       }
       seriesRows.push(genreSeries);
       window.test = seriesRows;
     }
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
       <main>
       </main>
     </div>
   );
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesList: state.series.seriesList,
    genres: state.genre
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSeries: () => (dispatch(fetchAllSeries())),
    fetchGenres: () => (dispatch(fetchGenres()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
