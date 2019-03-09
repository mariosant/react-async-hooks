import {useState, useEffect} from 'react';

const useAsync = (
	asyncFn: Function,
	params: any,
	maybeKey: String | Number | undefined,
) => {
	const [state, setState] = useState({pending: false});
	const key = maybeKey === undefined ? params : maybeKey;

	useEffect(() => {
		setState({pending: true, error: undefined, data: undefined});

		asyncFn(params)
			.then((data: any) => setState({pending: false, error: undefined, data}))
			.catch((error: Error) =>
				setState({pending: false, error, data: undefined}),
			);
	}, [key]);

	return state;
};

export default useAsync;
