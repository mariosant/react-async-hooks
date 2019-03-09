export interface State {
	pending: boolean;
	error?: Error;
	data?: any;
}

export default (pending: boolean, data?: any, error?: Error): State => {
	return {pending, data, error};
};
