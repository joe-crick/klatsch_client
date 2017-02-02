import Maybe from 'data.maybe';

const setState = (action, state) =>
	method => Maybe(action.subState)
		.getOrElse(
			() => method(state, action.payload),
			() => state.update(action.subState, subState => method(subState, action.payload))
		);

export default setState;