import React from 'react';
import {connect} from 'react-redux';

const {} = React.PropTypes;

function Support(props) {

  Support.propTypes = {};

  return {

    props,

    render() {
      return (
        <div className="klatsch-support">
          <div className="klatsch-support-header-container">
            <div className="header container">
              <h4>Feedback</h4>
            </div>
          </div>
          <div className="container">
            <form>
              <div id="feedback" className="form-group">

                <div className="form-group ">
                  <label>Tell us your problem</label>
                  <textarea name="feedbacktext" className="form-control" rows="3"/>

                </div>
                <div className="form-group ">
                  <label>Email</label>
                  <input type="email" value="" name="email" className="form-control"/>
                </div>
                <div className="form-group ">
                  <div>Do you have a photo or screenshot that would help us?</div>
                  <label className="">
                    <span>Upload it.</span>
                    <input type="file" value="Upload" id="feedback_file_input" name="file" className="form-control"/>
                  </label>
                  <input type="hidden" name="photo_url" id="photo_url" value="" className="form-control"/>
                </div>
                <div className="form-group ">
                  <button type="submit" className="btn btn-klatsch-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
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

export default connect(matchStateToProps, matchDispatchToProps)(Support);