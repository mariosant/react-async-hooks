# Async Hooks for React

> Tame that async beast right with the power of React Hooks!

[![NPM version](https://img.shields.io/npm/v/@mariosant/react-async-hooks.svg)](https://www.npmjs.com/package/@mariosant/react-async-hooks)
[![Build Status](https://travis-ci.org/mariosant/react-async-hooks.svg?branch=master)](https://travis-ci.org/mariosant/react-async-hooks)

## Installation

Add `@mariosant/react-async-hooks` to your `package.json`.

```bash
$ npm install @mariosant/react-async-hooks

# or
$ yarn add @mariosant/react-async-hooks
```

You can now import the module and use it like

```javascript
import {useAsync, useAsyncImperative} from '@mariosant/react-async-hooks';
```

## Usage

The module consists of two different hooks, `useAsync` and `useAsyncImperative`. The reason for that is, this way you can easily pick when the hook is going to be executed.

### useAsync

`useAsync(fn, deps)` will execute the provided async function as soon as the component renders.

```javascript
import {useAsync} from '@mariosant/react-async-hooks';

const fetchAsyncFn = async () => {
	// do something async
};

const Component = props => {
	const {pending, data, error} = useAsync(fetchAsyncFn, []);

	return <div>...</div>;
};
```

### useAsyncImperative

`useAsyncImperative(fn)` is very similar to `useAsync`, but instead the action will be invoked imperitevely.

```javascript
import {useAsyncImperative} from '@mariosant/react-async-hooks';

const fetchAsyncFn = async () => {
	// do something async
};

const Component = props => {
	const [{pending, data, error}, execute] = useAsyncImperative(fetchAsyncFn);

	return (
		<div>
			...
			<button onClick={execute}>Click me</button>
			...
		</div>
	);
};
```

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license.

[https://github.com/mariosant/react-async-hooks](https://github.com/mariosant/react-async-hooks)

## Contributing

1. Fork it (<https://github.com/mariosant/react-async-hooks/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
