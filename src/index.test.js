import {useAsync, useAsyncImperative} from '.';

describe('index', () => {
	test('exports properly', () => {
		expect(useAsync).toBeTruthy();
		expect(useAsyncImperative).toBeTruthy();
	});
});
