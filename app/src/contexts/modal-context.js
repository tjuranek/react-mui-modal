export const MODALS = {
	FORM: 'Form',
	MESSAGE: 'Message'
};

export const MODAL_CONTEXT_ACTIONS = {
	SET_MODAL: 'SET_MODAL',
	CLOSE_MODAL: 'CLOSE_MODAL'
};

const isValidModal = modal => Object.values(MODALS).includes(modal);

export const modalContextInitialState = {
	modal: MODALS.FORM
};

export const modalContextReducer = (state, action) => {
	switch (action.type) {
		case MODAL_CONTEXT_ACTIONS.SET_MODAL: {
			return {
				...state,
				modal: isValidModal(action.payload) ? action.payload : undefined
			};
		}

		case MODAL_CONTEXT_ACTIONS.CLOSE_MODAL: {
			return {
				...state,
				modal: undefined
			};
		}

		default: {
			return { ...state };
		}
	}
};
