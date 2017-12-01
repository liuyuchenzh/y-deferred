(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Deferred = (function () {
        function Deferred() {
            var _this = this;
            this.result = new Promise(function (resolve, reject) {
                _this.resolve = resolve;
                _this.reject = reject;
            });
        }
        Deferred.prototype.then = function (onFulfill, onReject) {
            return this.result.then(onFulfill, onReject);
        };
        Deferred.prototype.catch = function (onReject) {
            return this.result.catch(onReject);
        };
        return Deferred;
    }());
    exports.default = Deferred;
});
