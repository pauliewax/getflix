import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Footer extends React.Component {
  constructor(props) {
      super(props);
  }

  checkPath(newProps) {
    let footer = document.getElementsByClassName('footer')[0];
    if (newProps.location === '/') {
      footer.classList = ['footer footerLanding'];
    } else if (newProps.location === '/login') {
      footer.classList = ['footer footerLogin'];
    } else {
      footer.classList = ['footer'];
    }
  }
  
  render() {

    return(
      <div className='footer'>
        <main>
          <aside>Questions? Email paul.jo.eng@gmail.com</aside>
          <ul>
            <li><a href='https://www.linkedin.com/in/pauljoeng/' target='_blank'>LinkedIn</a></li>
            <li><a href='https://github.com/pauliewax/' target='_blank'>GitHub</a></li>
            <li><a href='http://paul-eng.com/' target='_blank'>Portfolio</a></li>
            <li><a href='http://paul-eng.com/assets/resume.pdf' target='_blank'>Resume</a></li>
            <li><a href='https://angel.co/paul-eng' target='_blank'>AngelList</a></li>
            <li><a href='mailto:paul.jo.eng@gmail.com'>Email</a></li>
          </ul>
          <div className ="iconPanel">
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-angellist"></i>
            <i className="fa fa-github"></i>
            <i className="fa fa-drivers-license"></i>
            <i className="fa fa-envelope"></i>
            <i className="fa fa-file"></i>
          </div>
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
