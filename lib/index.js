export default class Defer {
    constructor() {
        this.result = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    finish() {
        return this.result;
    }
}
