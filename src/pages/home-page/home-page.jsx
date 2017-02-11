import React from 'react';
import LoginBar from './login-bar/login-bar';
import TagLine from './tag-line/tag-line';
import HomeBottomNav from './home-bottom-nav/home-bottom-nav'
import {logUserIn} from './home-page-actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MultiSelect from '../../components/multi-select/multi-select';

const zipCodeText = 'zipCodeText';
const zipCodeTextValue = 'zipCodeTextValue';
const ageRangeLabel = 'ageRangeLabel';
const ageRanges = 'ageRanges';
const selectTitle = 'selectTitle';
const dropDownAction = 'dropDownAction';
const register = 'register';

/**
 * @desc The Home Page container component
 * @param props
 * @returns {*}
 * @constructor
 */
function HomePage(props) {

	const homeStore = props.homeStore;
	const store = homeStore;

	return {

		props,

		render() {
			return (
				<klatsch-home-page>
					<section className="home-bg">
							<form className="form-inline">
								<div className="row login-container container">
									<div className="container">
										<div className="col-md-6 home-logo pull-left"></div>
										<div className="col-md-2">
											<fieldset className="form-group">
												<input id="zip-code" className="form-control"
													   placeholder={store.get(zipCodeText)} value={store.get(zipCodeTextValue)}/>
											</fieldset>
										</div>
										<div className="col-md-2">
											<fieldset className="form-group">
												<MultiSelect
													options={store.get(ageRanges)}
													dropDownAction={store.get(dropDownAction)}
													selectTitle={store.get(selectTitle)}/>
											</fieldset>
										</div>
										<div className="col-md-2 continue-button">
											<button type="button" className="btn btn-primary continue-button"
													onClick={store.get(register)}>
												Continue
											</button>
										</div>
										<LoginBar loginButtonText={props.loginButtonText} logUserIn={props.logUserIn}/>
										<TagLine tagLine={homeStore.tagLine}/></div>
								</div>
							</form>
					</section>
					<section>
						<HomeBottomNav/>
					</section>
				</klatsch-home-page>
			)
		}
	}
}

/**
 * @desc Bind actions
 * @param dispatch
 * @returns {*}
 */
function matchDispatchToProps(dispatch) {
	return bindActionCreators({logUserIn}, dispatch)
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
		homeStore: state.homeStore
	}
}

export default connect(matchStateToProps, matchDispatchToProps)(HomePage);