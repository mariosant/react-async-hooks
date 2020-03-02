import { useState } from 'react';
import { Unwrap, State } from './types';

type Actions = {
  trigger: () => void;
};

const useAsyncTrigger = <T = any>(
  asyncFn: () => Promise<T>
): [State<Unwrap<typeof asyncFn>>, Actions] => {
  const [state, setState] = useState<State<Unwrap<typeof asyncFn>>>({
    pending: false,
  });

  const trigger = () => {
    setState({ pending: true });
    asyncFn()
      .then(data => setState({ pending: false, data }))
      .catch(error => setState({ pending: false, error }));
  };

  return [state, { trigger }];
};

export default useAsyncTrigger;
