import React from 'react';
import {connect} from 'react-redux';

const {} = React.PropTypes;

function Director(props) {

  return {

    props,

    componentDidUpdate() {
      const dashboard = '/dashboard';
      if (this.props.authStore.get('isAuthenticated') && this.props.router.location.pathname !== dashboard) {
        this.props.router.push(dashboard)
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