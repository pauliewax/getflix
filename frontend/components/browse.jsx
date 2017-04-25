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
         <img className="splash-bg" src="http://www.pauliewax.com/wp-content/uploads/2017/04/splash-bg.jpg" />

         <aside>
           <img className="splash-logo" src="http://www.pauliewax.com/wp-content/uploads/2017/04/getflixoriginal.png" />
           <text>In the final chapter of the Man With No Bugs trilogy, our hero finally hits the stack limit. See how it all unfolds when running is not defined.</text>
         </aside>
       </section>

       <section>
         <h1>I'M GONNA BE A VIDEO WHEN I GROW UP</h1>
       </section>

     </div>
   );
 }
}

export default Browse;
