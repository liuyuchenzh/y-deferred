var Deferred = (function () {
    function Deferred() {
        var _this = this;
        this.result = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    Deferred.prototype.then = function (onFullfill, onReject) {
        return this.result.then(onFullfill, onReject);
    };
    Deferred.prototype.catch = function (onReject) {
        return this.result.catch(onReject);
    };
    return Deferred;
}());
export default Deferred;
