import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { hashHistory } from 'react-router';

class AccountMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleClick() {
    let dropmenu = document.getElementsByClassName('accountDropdown')[0];
    dropmenu.classList.toggle('show');
  }

  handleHover(e) {
    let dropmenu = document.getElementsByClassName('accountDropdown')[0];
    dropmenu.classList.add('show');
  }

  handleLeave() {
    let dropmenu = document.getElementsByClassName('accountDropdown')[0];
    dropmenu.classList.remove('show');
  }

  handleSignout() {
    this.props.logout()
    .then(()=>hashHistory.push(''));
  }

  render() {
    let username;
    if (this.props.user) {
      username = this.props.user.email;
    }

    return(
      <div onMouseLeave={this.handleLeave} className="accountMenu">

          <detail onClick={this.handleClick}  onMouseEnter={this.handleHover} >
                <img src="https://s3.us-east-2.amazonaws.com/getflix-pro/avatar.png"/>
                <p className="userName">
                  { username }
                </p>
                <i className="fa fa-caret-down"></i>
          </detail>
          <ul className="accountDropdown">
            <li onClick={()=>hashHistory.push('/mylist')} >My List</li>
            <i className="fa fa-caret-up"></i>
            <p onClick={this.handleSignout}>Sign out of Getflix</p>
          </ul>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => (dispatch(logout()))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AccountMenu);
