import {useState, useEffect} from 'react';

const useAsync = (asyncFn, deps = []) => {
	const [state, setState] = useState({
		pending: false,
		data: undefined,
		error: undefined,
	});

	useEffect(() => {
		setState({pending: true});

		asyncFn()
			.then(data => setState({pending: false, data}))
			.catch(error => setState({pending: false, data: undefined, error}));
	}, [asyncFn, deps]);

	return state;
};

export default useAsync;
