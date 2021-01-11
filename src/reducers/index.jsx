export const initialState = {
	user: {
		name: 'Василий',
		lastname: 'Реактов',
		age: 18
	}
};

export function rootReducer(state = initialState) {
	return state;
}
