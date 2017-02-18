import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Account from '../../../components/account/account';

const {} = React.PropTypes;

function Login(props) {

  Login.propTypes = {};

  return {

    props,

    handleSubmit(values) {
      // Do something with the form values
      console.log(values);
    },

    render() {
      const {handleSubmit} = this.props;
      return (
        <div className="klatsch-registration">
          <div className="klatsch-registration-handle">
            <div className="container">
              <h4>Register</h4>
              {/*TODO: Remove the close-registration id used for mocking, and replace with onClick*/}
              <button className="btn btn-klatsch-tertiary pull-right" id="close-registration">x</button>
              <div className="clearfix"/>
            </div>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <Account/>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
    }
  };

}


Login = reduxForm({
  form: 'login'
})(Login);

export default Login;