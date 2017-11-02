export default class Defer {
    result: Promise<any>;
    resolve: (ret: any) => any;
    reject: (ret: any) => any;
    constructor();
    finish(): Promise<any>;
}
