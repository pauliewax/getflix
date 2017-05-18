
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { login, signup, receiveErrors } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleGuest(e) {
    e.preventDefault();
    this.props.login({email: "Guest", password: "password"})
      .then(() => this.props.router.push("/browse"));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({email: this.state.email, password: this.state.password})
      .then(() => this.props.router.push("/browse"));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.errors === newProps.errors) {
      this.props.receiveErrors({});
    }
  }

  resetInput() {
    this.setState({ email: "", password: "" });
  }

  render() {
    const formType = this.props.formType;
    const header = formType === "/login" ? "Sign In" : "Sign Up";
    const buttonText = formType === "/login" ? "Sign In" : "Sign Up";
    const otherForm = this.props.formType === "/login" ? "/signup" : "/login";
    const otherLinkText = formType === "/login" ? "New to Getflix? " : "Already a member? ";
    const otherFormText = this.props.formType === "/login" ? "Sign up now." : "Sign in now.";
    const errors = this.props.errors.responseJSON !== undefined ? this.props.errors.responseJSON.join(", ") : undefined;

    let errorBox = <detail></detail>;

    if (errors) {
      errorBox = <detail className="errorBox" >{errors}</detail>;
    }

    let guestLogin = <div></div>;

    if (formType === "/login") {
      guestLogin = <Link className="guestLogin" onClick={this.handleGuest} to="/" >Sign in as a guest?</Link>;
    }

    return (
      <div className="sessionForm">

          <form className="formWindow" onSubmit={this.handleSubmit} >
            <h1>{header}</h1>
            {errorBox}
            <label> Email
              <input type="text"
                onChange={this.update('email')}
                value={this.state.email}
              />
            </label>
            <label> Password
              <input type="password"
                onChange={this.update('password')}
                value={this.state.password}
              />
            </label>

            { guestLogin }
            <button className="submitBtn" >{ buttonText }</button>

            <label className="otherForm">
              <detail>
                { otherLinkText }
                <Link to={otherForm}
                  onClick={this.resetInput}
                  className="otherLink">{otherFormText}
                </Link>
              </detail>
            </label>
          </form>

        <img className="splashImg" src="https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg" />
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors,
    formType: ownProps.location.pathname
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.location.pathname;
  if (formAction === '/login') {
      return {
        processForm: (user) => (dispatch(login(user))),
        receiveErrors: (errors) => (dispatch(receiveErrors(errors))),
        login: (user) => (dispatch(login(user)))

      };
    } else {
      return {
        processForm: (user) => (dispatch(signup(user))),
        receiveErrors: (errors) => (dispatch(receiveErrors(errors))),
        login: (user) => (dispatch(login(user)))
      };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
