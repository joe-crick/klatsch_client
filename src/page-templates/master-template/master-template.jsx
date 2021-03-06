import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav/nav';
import PageFooter from 'components/page-footer/page-footer';
import Chat from 'components/chat/chat';
import {logUserOut} from './master-template-actions';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

const {func, number} = PropTypes;

function MasterTemplate(props) {

  MasterTemplate.propTypes = {
    logUserOut: func,
    conversationId: number
  };

  return {

    props,

    render() {
      return (
        <klatsch-master>
          <Nav logUserOut={props.logUserOut} />
          <main>
            {this.props.children}
          </main>
          <PageFooter/>
          <div className="hidden" id="chat-container">
            <Chat conversation={props.conversationId}/>
          </div>
        </klatsch-master>
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
  return bindActionCreators({
    logUserOut
  }, dispatch);
}

/**
 * @desc Bind redux state
 * @param state
 * @returns {{--prop: *, ...}}
 */
const matchStateToProps = state => ({

});

export default connect(matchStateToProps, matchDispatchToProps)(MasterTemplate);