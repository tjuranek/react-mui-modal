import React, { useContext, useState } from 'react';
import { ModalContext } from '../app';
import { MODALS } from '../contexts/modal-context';
import {
	BaseModal,
	BaseModalHeader,
	BaseModalBody,
	BaseModalFooter
} from './base-modal';
import { FormModalHeader, FormModalBody, FormModalFooter } from './form-modal';

export const ModalRenderer = props => {
	const initialState = {
		header: undefined,
		body: undefined,
		footer: undefined
	};

	const { modalContextState, modalContextDispatch } = useContext(
		ModalContext
	);
	const [state, setState] = useState(initialState);

	/* 	switch (modalContextState.modal) {
		case MODALS.FORM: {
			if (state.header != <FormModalHeader />) {
				setState({
					header: <FormModalHeader />,
					body: <FormModalBody />,
					footer: <FormModalFooter />
				});
			}
		}
    } */

	if (!modalContextState.modal) return;

	return (
		<div>
			<BaseModal open={!!modalContextState.modal}>
				<BaseModalHeader>
					<FormModalHeader />
				</BaseModalHeader>

				<BaseModalBody>
					<FormModalBody />
				</BaseModalBody>

				<BaseModalFooter>
					<FormModalFooter />
				</BaseModalFooter>
			</BaseModal>
		</div>
	);
};
