import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import GenreBrowser from './genre_browser';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let absoluteNavPaths = ["/", "/signup", "/login"];

    if (absoluteNavPaths.includes(this.props.formType)) {
      let navButton;

      if (this.props.loggedIn) {
        navButton = <button onClick={this.props.logout}>Log Out</button>;
      } else {
        navButton = <button onClick={()=>hashHistory.push("/login")}>Sign In</button>;
      }
      return(
        <div>
          <nav className="navBar absolute">
            <img onClick={()=>hashHistory.push("/")} src="http://www.pauliewax.com/wp-content/uploads/2017/04/logo.png" />
            { navButton }
          </nav>
        </div>
      );
    } else {
      return(
        <div>
          <nav className="navBar fixed">
            <img onClick={()=>hashHistory.push("/")} src="http://www.pauliewax.com/wp-content/uploads/2017/04/logo.png" />
            <GenreBrowser />
          </nav>
        </div>
      );
    }
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

    // this.state = {scroll: "testme"};
    // componentDidMount -> trackable = document.getElementById('blah')
    // onClick={()=>this.setState({scroll: trackable.scrollTop})}
    // <p>{this.state.scroll}</p>
