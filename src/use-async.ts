import {useState, useEffect} from 'react';
import makeState, {State} from './make-state';

const useAsync = (
	asyncFn: Function,
	params: any,
	maybeKey: String | Number | undefined,
): State => {
	const [state, setState] = useState({pending: false});
	const key = maybeKey === undefined ? params : maybeKey;

	useEffect(() => {
		setState(makeState(true));

		asyncFn(params)
			.then((data: any) => setState(makeState(false, data)))
			.catch((error: Error) => setState(makeState(false, undefined, error)));
	}, [key]);

	return state;
};

export default useAsync;
