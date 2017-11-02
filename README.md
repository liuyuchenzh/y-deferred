## Intro

Simple implementation of deferred object

## Installation

```shell
npm i --save-dev y-deferred
# or
yarn add --dev y-deferred
```

## Usage

```js
import Deferred from 'y-deferred'


function test() {
  const d = new Deferred()
  setTimeout(() => {
    d.resolve('done')
  }, 1000)
  return d.result
}

async function handleTest() {
  const result = await test()
  console.log(result) // 'done'
}

handleTest()
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Yuchen Liu