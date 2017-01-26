import Either from 'ramda-fantasy/src/Either';
import Maybe from 'ramda-fantasy/src/Maybe'
import Identity from 'ramda/src/identity';

export const actions = {
	SET_ENTRIES: 'SET_ENTRIES',
	NEXT: 'NEXT',
	VOTE: 'VOTE',
	DEFAULT: 'DEFAULT'
};

const actionMap = new Map();
actionMap.set(actions.SET_ENTRIES, () => {});
actionMap.set(actions.NEXT, () => {});
actionMap.set(actions.VOTE, () => {});

const setState = (action, state) =>
	method => Maybe(action.subState)
		.fold(() => method(state, action.payload),
			() => state.update(action.subState, subState => method(subState, action.payload)));

const reducer = (state = INITIAL_STATE, action) =>

	Either(actionMap.get(action.type), state)
		.fold(
			method => setState(action, state)(method),
			Identity
		);

export default reducer;