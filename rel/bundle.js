(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

// 注意这个方法在入口文件里没有被调用过
//最终会被 Rollup 剔除


//入口文件需要调用到的求立方值的方法
function cube ( x ) {
    return x * x * x;
}

console.log( cube( 5 ) ); // 125，即5的立方值

})));
//# sourceMappingURL=bundle.js.map
