import {renderHook, cleanup, act} from 'react-hooks-testing-library';
import delay from 'delay';
import useAsyncImperative from './use-async-imperative';

afterEach(cleanup);

describe('use-async imperative', () => {
	test('works', async () => {
		const fn = async () => {
			await delay(300);
			return true;
		};

		const {result} = renderHook(() => useAsyncImperative(fn));

		expect(result.current).toEqual([
			{
				pending: false,
				data: undefined,
				error: undefined,
			},
			expect.any(Function),
		]);

		act(() => result.current[1]());
		await delay(500);

		expect(result.current[0]).toEqual({
			pending: false,
			data: true,
			error: undefined,
		});
	});
});
