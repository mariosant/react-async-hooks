import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import delay from 'delay';
import { useTriggerAsync } from '../src';

afterEach(cleanup);

describe('use-async imperative', () => {
  test('works', async () => {
    const fn = async () => {
      await delay(300);
      return true;
    };

    const { result } = renderHook(() => useTriggerAsync(fn));

    expect(result.current).toEqual([
      {
        pending: false,
        data: undefined,
        error: undefined,
      },
      { trigger: expect.any(Function) },
    ]);

    const [, { trigger }] = result.current;
    act(() => trigger());
    await delay(500);

    const [state] = result.current;

    expect(state).toEqual({
      pending: false,
      data: true,
      error: undefined,
    });
  });
});
