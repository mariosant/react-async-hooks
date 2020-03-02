import { renderHook, cleanup } from '@testing-library/react-hooks';
import delay from 'delay';
import { useAsync } from '../src';

afterEach(cleanup);

describe('use-async', () => {
  test('works', async () => {
    const fn = async () => {
      await delay(300);
      return true;
    };

    const { result } = renderHook(() => useAsync(fn));
    expect(result.current).toEqual([
      {
        pending: true,
      },
      {
        reload: expect.any(Function),
      },
    ]);

    await delay(500);

    const [state] = result.current;

    expect(state).toEqual({
      pending: false,
      data: true,
      error: undefined,
    });
  });
});
