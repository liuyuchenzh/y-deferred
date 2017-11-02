export default class Defer {
  result: Promise<any>
  resolve: (ret: any) => any
  reject: (ret: any) => any

  constructor() {
    this.result = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  finish() {
    return this.result
  }
}
