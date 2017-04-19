
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { login, signup } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit() {
    this.props.processForm({email: this.state.email, password: this.state.password})
      .then(() => this.props.router.push("/"));
  }


  render() {
    const header = this.props.formType === "/login" ? "Log In!" : "Sign Up!";
    const otherForm = this.props.formType === "/login" ? "/signup" : "/login";
    const otherFormText = this.props.formType === "/login" ? "Sign Up instead!" : "Log In instead!";
    const errors = this.props.errors.responseText === undefined ? "" : this.props.errors.responseJSON.join(", ");
    return (
      <section>
        <h1>{header}</h1>
        <h2>{errors}</h2>
        <h3> Enter Email: </h3>
          <input type="text" onChange={this.update('email')} value={this.state.email} />
        <h3> Enter Password: </h3>
          <input type="password" onChange={this.update('password')} value={this.state.password} />
        <br />
        <button className="button" onClick={this.handleSubmit}>Submit</button>
        <br />
        <Link to={otherForm} className="otherform">{otherFormText}</Link>
      </section>
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
        processForm: (user) => (dispatch(login(user)))
      };
    } else {
      return {
        processForm: (user) => (dispatch(signup(user)))
      };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
