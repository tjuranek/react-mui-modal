import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core';

export const BaseModal = props => {
	const { open } = props;
	return <Dialog open={open}>{props.children}</Dialog>;
};

export const BaseModalHeader = props => {
	return <DialogTitle>{props.children}</DialogTitle>;
};

export const BaseModalBody = props => {
	return <DialogContent>{props.children}</DialogContent>;
};

export const BaseModalFooter = props => {
	return <DialogActions>{props.children}</DialogActions>;
};
