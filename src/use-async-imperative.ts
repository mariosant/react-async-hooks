import {useState} from 'react';
import makeState, {State} from './make-state';

const useAsyncImperative = (
	asyncFn: Function,
	params: any,
): [State, () => Promise<void>] => {
	const [state, setState] = useState(makeState(false));

	const run = async () => {
		setState({pending: true});
		asyncFn(params)
			.then((data: any) => setState(makeState(false, data)))
			.catch((error: Error) => setState(makeState(false, undefined, error)));
	};

	return [state, run];
};

export default useAsyncImperative;
