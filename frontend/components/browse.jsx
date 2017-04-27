import React from 'react';
import { connect } from 'react-redux';

class Browse extends React.Component {
 constructor(props) {
   super(props);
 }

 render()  {
   return(
     <div className="browser" >
       <section className="browse-splash">
         <img className="splash-bg" src="http://www.pauliewax.com/wp-content/uploads/2017/04/splash-bg.png" />

         <aside>
           <img className="splash-logo" src="http://www.pauliewax.com/wp-content/uploads/2017/04/getflixoriginal.png" />
           <text>Dry air. Wet code. Escape is not defined. See how it all unfolds when the stack limit is reached in this critically acclaimed spaghetti coder.</text>
         </aside>
       </section>
     </div>
   );
 }
}

export default Browse;
