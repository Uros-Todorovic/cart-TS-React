import { AppState } from './context.tsx';
import { Actions } from './actions.tsx';

export const reducer = (state: AppState, action: Actions): AppState => {
	if (action.type === 'REMOVE')
		return {
			...state,
			loading: true,
		};
	return state;
};
