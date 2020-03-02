import { useEffect } from 'react';
import useAsyncTrigger from './use-trigger-async';

/**
 * Hook to handle async functions.
 */
const useAsync = <T = any>(asyncFn: () => Promise<T>) => {
  const [state, { trigger }] = useAsyncTrigger(asyncFn);

  useEffect(() => trigger(), []);

  return [state, { reload: trigger }];
};

export default useAsync;
