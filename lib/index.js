var t=function(){var t=this;this.result=new Promise(function(e,r){t.resolve=e,t.reject=r})};t.prototype.then=function(t,e){return this.result.then(t,e)},t.prototype.catch=function(t){return this.result.catch(t)},module.exports=t;
//# sourceMappingURL=index.js.map
