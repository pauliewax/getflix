import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { login } from '../actions/session_actions';

class Landing extends React.Component {
  constructor(props) {
      super(props);

  this.handleGuest = this.handleGuest.bind(this);
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({email: "Guest", password: "password"})
      .then(() => this.props.router.push("/browse"));
  }

  render() {
    return(
      <div className="landing" >

        <section className="landingBlock">
          <h2>See what's next.</h2>
          <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
          <button className="button" onClick={this.handleGuest}><i className="fa fa-key" aria-hidden="true"></i>Demo Login</button>
          <button className="button" onClick={()=>hashHistory.push("/signup")}>Join Free For a Month</button>
        </section>

        <img src ="https://s3.us-east-2.amazonaws.com/getflix-pro/landing.jpg" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => (dispatch(login(user)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
