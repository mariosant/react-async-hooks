import {useState} from 'react';

const useAsyncImperative = (asyncFn: Function, params: any) => {
	const [state, setState] = useState({pending: false});

	const run = async () => {
		setState({pending: true, error: undefined, data: undefined});
		asyncFn(params)
			.then((data: any) => setState({pending: false, error: undefined, data}))
			.catch((error: Error) =>
				setState({pending: false, error, data: undefined}),
			);
	};

	return [state, run];
};

export default useAsyncImperative;
