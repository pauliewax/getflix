import React from 'react';
import { connect } from 'react-redux';
import { fetchFollows } from '../actions/follow_actions';
import SeriesRow from './series_row';

class Browse extends React.Component {
 constructor(props) {
   super(props);
 }

 componentWillMount() {
   this.props.fetchFollows();
 }

 generateRows() {
   let allSeries = Object.assign([], this.props.follows);
   let allRows =[];
   while (allSeries.length !== 0)  {
     allRows.push(allSeries.slice(0,6));
     allSeries = allSeries.slice(6);
   }
   return allRows;
 }

 render()  {
   let seriesRows= "";

   if (this.props.follows) {
     let rows = this.generateRows();
     seriesRows = rows.map(row=><SeriesRow key={row[0].id} row={row} rowId={row[0].id} />);
   }

   return(
     <div className="browser" >
       <section className="browse-splash">
         <img className="splash-bg" src="http://www.pauliewax.com/wp-content/uploads/2017/04/splash-bg.png" />

         <aside>
           <img className="splash-logo" src="http://www.pauliewax.com/wp-content/uploads/2017/04/getflixoriginal.png" />
           <text>Dry air. Wet code. Escape is not defined. See how it all unfolds when the stack limit is reached in this critically acclaimed spaghetti coder.</text>
         </aside>
         { seriesRows }
       </section>
     </div>
   );
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    follows: state.follows
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFollows: () => (dispatch(fetchFollows()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
