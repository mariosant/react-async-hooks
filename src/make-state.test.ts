import makeState from './make-state';

describe('make-state', () => {
	test('works', () => {
		expect(makeState(false, {})).toEqual({
			data: {},
			error: undefined,
			pending: false,
		});
	});
});
