import {INITIAL_STATE} from 'stores/klatsch-store';
import Either from 'ramda-fantasy/src/Either';
import Maybe from 'ramda-fantasy/src/Maybe'
import Identity from 'ramda/src/identity';

export const actions = {
	SET_AGE_RANGE: 'SET_AGE_RANGE'
};

const actionMap = new Map();
actionMap.set(actions.SET_AGE_RANGE, () => {});

const setState = (action, state) =>
	method => Maybe(action.subState)
		.getOrElse(() => method(state, action.payload),
			() => state.update(action.subState, subState => method(subState, action.payload)));

const reducer = (state = INITIAL_STATE, action) =>

	Either(actionMap.get(action.type), state)
		.chain(
			method => setState(action, state)(method),
			Identity
		);

export default reducer;