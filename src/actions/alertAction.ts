import { SET_ALERT } from "./types";

export interface AlertState {
	message: string;
}

export interface AlertAction {
	type: typeof SET_ALERT;
	payload: string;
}

export const setAlert = (message: string): AlertAction => {
	return {
		type: SET_ALERT,
		payload: message,
	};
};
