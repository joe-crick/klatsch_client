import {INITIAL_STATE} from 'stores/klatsch-store';
import Either from 'data.either';
import Identity from 'ramda/src/identity';
import setState from './set-state';

export const actions = {
	SET_AGE_RANGE: 'SET_AGE_RANGE'
};

const actionMap = new Map();
actionMap.set(actions.SET_AGE_RANGE, () => {});


const reducer = (state = INITIAL_STATE, action) =>

	Either(actionMap.get(action.type), state)
		.chain(
			method => setState(action, state)(method),
			Identity
		);

export default reducer;