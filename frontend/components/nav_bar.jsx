import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    let navButton;

    if (!(this.props.formType === "/")) {
      navButton = <div></div>;
    } else if (this.props.loggedIn) {
      navButton = <button className="button" onClick={this.logout}>Log Out</button>;
    } else {
      navButton = <button className="button" onClick={()=>hashHistory.push("/login")}>Sign In</button>;
    }

    return(
      <div>
        <nav className="navBar">
          <img className="navLogo" src="https://vignette4.wikia.nocookie.net/smurfs/images/a/a1/Netflix-logo.png/revision/latest?cb=20150508223333" />
          { navButton }
        </nav>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    formType: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => (dispatch(logout()))
  };

};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
