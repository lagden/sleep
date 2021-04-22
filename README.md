# sleep

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[![XO code style][xo-img]][xo]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/sleep.svg
[npm]:             https://www.npmjs.com/package/@tadashi/sleep
[ci-img]:          https://github.com/lagden/sleep/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/sleep/actions?query=workflow%3A%22Node.js+CI%22
[coveralls-img]:   https://coveralls.io/repos/github/lagden/sleep/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/sleep?branch=main
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo


Sweet dreams.


## Install

```
$ npm i -S @tadashi/sleep
```


## API

```ts
sleep(duration?: number, fulfilled?: boolean, response?: any): Promise
```

#### duration

> Type: number  
> Default: 1


#### fulfilled

> Type: boolean  
> Default: true


#### response

> Type: any  
> Default: 'Awake'


## Usage

```js
'use strict'

import sleep from '@tadashi/sleep'

(async () => {
  console.log('before')
  await sleep()
  console.log('after')
})()
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
