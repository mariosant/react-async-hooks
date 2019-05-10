import {useState} from 'react';

const useAsyncImperative = asyncFn => {
	const [state, setState] = useState({
		pending: false,
		data: undefined,
		error: undefined,
	});

	const run = () => {
		setState({pending: true});
		asyncFn()
			.then(data => setState({pending: false, data}))
			.catch(error => setState({pending: false, data: undefined, error}));
	};

	return [state, run];
};

export default useAsyncImperative;
