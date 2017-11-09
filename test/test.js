const Deferred = require('../lib/index.js').default

const d = new Deferred()
d.reject(1)
Promise.resolve(d).then(
  ret => {
    console.log('in', ret)
  },
  err => {
    console.log('err', err)
  }
)

const d2 = new Deferred()
d2.resolve(2)
Promise.resolve(d2).then(
  ret => {
    console.log('in', ret)
  },
  err => {
    console.log('err', err)
  }
)

const d3 = new Deferred()
d3.resolve(3)
d3.then(ret => console.log('d3 ret', ret))

const d4 = new Deferred()
d4.reject(4)
d4.then(ret => {}, err => console.log('d4 err', err))


function test() {
  const d = new Deferred()
  setTimeout(() => {
    d.resolve('done')
  }, 1000)
  return d
}

async function handleTest() {
  const result = await test()
  console.log(result) // 'done'
}

handleTest()