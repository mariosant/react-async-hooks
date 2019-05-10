import {renderHook, cleanup} from 'react-hooks-testing-library';
import delay from 'delay';
import useAsync from './use-async';

afterEach(cleanup);

describe('use-async', () => {
	test('works', async () => {
		const fn = async () => {
			await delay(300);
			return true;
		};

		const {result} = renderHook(() => useAsync(fn));
		expect(result.current).toEqual({
			pending: true,
			data: undefined,
			error: undefined,
		});

		await delay(500);
		expect(result.current).toEqual({
			pending: false,
			data: true,
			error: undefined,
		});
	});

	test('errors should be wrapped to property error', async () => {
		const fn = async () => {
			await delay(300);
			throw new Error('oopsie');
		};

		const {result} = renderHook(() => useAsync(fn));
		expect(result.current).toEqual({
			pending: true,
			data: undefined,
			error: undefined,
		});

		await delay(500);
		expect(result.current).toEqual({
			pending: false,
			data: undefined,
			error: expect.any(Error),
		});
	});
});
