import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EditProfileHeader from './edit-profile-header/edit-profile-header';
import BasicContent from './basic-content/basic-content';
import Photos from './photos/photos';
import Account from 'components/account/account';

const {} = PropTypes;

function Profile(props) {

  Profile.propTypes = {};

  return {

    props,

    render() {
      return (
        <div className="klatsch-edit-profile">
          <div className="klatsch-edit-profile-body-container">
            <EditProfileHeader/>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="basics" role="tabpanel">
              <BasicContent/>
            </div>
            <div className="tab-pane" id="photos" role="tabpanel">
              <Photos/>
            </div>
            <div className="tab-pane" id="account" role="tabpanel">
              <Account/>
            </div>
          </div>
        </div>
      );
    }
  };

}


/**
 * @desc Bind actions
 * @param dispatch
 * @returns {*}
 */
const matchDispatchToProps = dispatch => ({});

/**
 * @desc Bind redux state
 * @param state
 * @returns {{--prop: *, ...}}
 */
const matchStateToProps = state => ({});

export default connect(matchStateToProps, matchDispatchToProps)(Profile);