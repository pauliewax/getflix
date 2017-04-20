import React from 'react';
import { connect } from 'react-redux';

class Browse extends React.Component {
 constructor(props) {
   super(props);
 }

 render()  {
   return(
     <div>
       <section className="browse-splash">
         <img className="splash-bg" src="https://art-s.nflximg.net/ce088/9f320e03ceeb25b80f10cc180dc94aafd56ce088.webp" />

         <aside>
           <img className="splash-logo" src="https://art-s.nflximg.net/95244/b74786b3fe3cdd237400bb81f8579b1720195244.webp" />
           <text>They look alike, they sound alike and they both hate Richard Nixon. These twins are bringing the high to low-key comedy.</text>
         </aside>
       </section>
     </div>
   );
 }
}

export default Browse;
