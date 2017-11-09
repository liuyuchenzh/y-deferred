export declare type handler = (...args: any[]) => any;
export default class Deferred {
    result: Promise<any>;
    resolve: (ret: any) => any;
    reject: (ret: any) => any;
    constructor();
    then(onFullfill: handler, onReject?: handler): Promise<any>;
    catch(onReject: handler): Promise<any>;
}
