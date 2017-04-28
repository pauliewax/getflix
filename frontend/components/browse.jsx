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
   let seriesRows;
   if (this.props.seriesList) {
     let rows = this.generateRows();
     seriesRows = rows.map(row=><SeriesRow key={row[0].id} row={row} rowId={row[0].id}/>);

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
         {seriesRows}
       </main>
     </div>
   );
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesList: state.series.seriesList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSeries: () => (dispatch(fetchAllSeries())),
    fetchGenres: () => (dispatch(fetchGenres()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
