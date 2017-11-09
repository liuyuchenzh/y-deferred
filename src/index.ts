export type handler = (...args: any[]) => any

export default class Deferred {
  result: Promise<any>
  resolve: (ret: any) => any
  reject: (ret: any) => any

  constructor() {
    this.result = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  then(onFullfill: handler, onReject?: handler): Promise<any> {
    return this.result.then(onFullfill, onReject)
  }

  catch(onReject: handler) {
    return this.result.catch(onReject)
  }
}
