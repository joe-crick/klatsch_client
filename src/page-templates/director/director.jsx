import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const {} = PropTypes;

function Director(props) {

  return {

    props,

    componentDidUpdate(prevProps) {
      const dashboard = '/dashboard';
      // TODO: This will have to be more intelligent
      const isAuthenticated = 'isAuthenticated';
      const isLoggedIn = this.props.authStore.isAuthenticated;
      if (isLoggedIn && prevProps.router.location.pathname === '/') {
        this.props.router.push(dashboard)
      } else if (!isLoggedIn && prevProps.router.location.pathname !== '/') {
        this.props.router.push('/');
      }
    },

    render() {
      return (
        <klatsch>
          {this.props.children}
        </klatsch>
      );
    }
  };

}

/**
 * @desc Bind redux state
 * @param state
 * @returns {{--prop: *, ...}}
 */
const matchStateToProps = state => ({
  authStore: state.authStore
});

export default connect(matchStateToProps)(Director);