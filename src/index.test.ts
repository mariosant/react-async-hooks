import {useAsync, useAsyncImperative} from './index';

describe('index', () => {
	test('exports properly', () => {
		expect(useAsync).toBeTruthy();
		expect(useAsyncImperative).toBeTruthy();
	});
});
