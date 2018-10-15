const requestState = 'REQUEST_WEATHER_FORECASTS';
const receieveState = 'RECEIVE_WEATHER_FORECASTS';
const initialState = { States: [], isLoading: false };

export const actionCreators = {
	requestState: () => async (dispatch, getState) => {
		dispatch({ type: receieveState});

		const url = `api/Search/GetStates`;
		const response = await fetch(url);
		const forecasts = await response.json();
	}
	//''decrement: () => ({ type: decrementCountType })
};

export const reducer = (state, action) => {
	state = state || initialState;

	if (action.type === requestState) {
		return {
			...state,
			isLoading: true
		};
	}

	//if (action.type === receieveState) {
	//	return {
	//		...state,
	//		startDateIndex: action.startDateIndex,
	//		States: action.States,
	//		isLoading: false
	//	};
	//}

	return state;
};