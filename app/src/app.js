import React, { createContext, useReducer } from 'react';
import { ModalRenderer } from './components/modal-renderer';
import {
	modalContextInitialState,
	modalContextReducer
} from './contexts/modal-context';

export const ModalContext = createContext();

export const App = () => {
	const [modalContextState, modalContextDispatch] = useReducer(
		modalContextReducer,
		modalContextInitialState
	);

	return (
		<ModalContext.Provider
			value={{ modalContextState, modalContextDispatch }}
		>
			<ModalRenderer />
		</ModalContext.Provider>
	);
};
