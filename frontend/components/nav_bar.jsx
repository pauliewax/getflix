import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import GenreBrowser from './genre_browser';
import SearchBar from './search_bar';
import AccountMenu from './account_menu';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let absoluteNavPaths = ["/", "/signup", "/login"];

    if (absoluteNavPaths.includes(this.props.formType)) {
      let navButton;

      if (this.props.loggedIn && this.props.formType === "/") {
        navButton = <button onClick={this.props.logout}>Log Out</button>;
      } else if (this.props.formType === "/" ){
        navButton = <button onClick={()=>hashHistory.push("/login")}>Sign In</button>;
      } else {
        navButton = <div />;
      }
      return(
        <div>
          <nav className="navBar absolute">
            <img className="logo" onClick={()=>hashHistory.push("/")} src="http://www.pauliewax.com/wp-content/uploads/2017/04/logo.png" />
            { navButton }
          </nav>
        </div>
      );
    } else {
      return(
        <div>
          <nav className="navBar fixed">
            <section>
              <div>
                <img className="logo" onClick={()=>hashHistory.push("/")} src="http://www.pauliewax.com/wp-content/uploads/2017/04/logo.png" />
              </div>
              <GenreBrowser />
            </section>

            <aside>
              <SearchBar />
              <AccountMenu />
            </aside>
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
