import React from 'react';
import HomeBottomNav from './home-bottom-nav/home-bottom-nav';
import TagLine from './tag-line/tag-line';
import HomeNav from './home-nav/home-nav';
import PageFooter from '../../components/page-footer/page-footer';
import Registration from './registration/registration';
import {toggleRegistrationView} from './home-page-actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const isRegistrationVisible = 'isRegistrationVisible';

/**
 * @desc The Home Page container component
 * @param props
 * @returns {*}
 * @constructor
 */
function HomePage(props) {

  const homeStore = props.homeStore;
  const tagLine = 'tagLine';

  return {

    props,

    isRegistrationVisible() {
      return this.props.authStore.get(isRegistrationVisible) ? <Registration/> : '';
    },

    render() {
      return (
        <klatsch-home-page>
          <section className="home-bg">
            <HomeNav
              homeStore={homeStore}
              toggleRegistration={props.toggleRegistrationView}
              loginButtonText={props.loginButtonText}/>
            <TagLine tagLine={homeStore.get(tagLine)}/>
          </section>
          <section>
            <HomeBottomNav/>
          </section>
          <section>
            <PageFooter/>
          </section>
          {this.isRegistrationVisible()}
        </klatsch-home-page>
      );
    }
  };
}

/**
 * @desc Bind actions
 * @param dispatch
 * @returns {*}
 */
function matchDispatchToProps(dispatch) {
  return bindActionCreators({toggleRegistrationView}, dispatch);
}

/**
 * @desc Bind redux state
 * @param state
 * @returns {{authStore: *, homeStore: *}}
 */
function matchStateToProps(state) {
  const loginButtonText = 'get' in state.authStore ? state.authStore.get('loginButtonText') : '';
  return {
    loginButtonText,
    homeStore: state.homeStore,
    authStore: state.authStore
  };
}

export default connect(matchStateToProps, matchDispatchToProps)(HomePage);