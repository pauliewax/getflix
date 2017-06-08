import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Footer extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {

    return(
      <div className='footer'>
        <main>
          <aside>Questions? Email paul.jo.eng@gmail.com</aside>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>AngelList</li>
            <li>Email</li>
          </ul>
          <p>© 1989-2017 Paul Eng, Inc.</p>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.router.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));
