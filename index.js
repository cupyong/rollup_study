var rollup = require( 'rollup' );
rollup.rollup({
    entry: 'src/main.js',
}).then( function ( bundle ) {
    bundle.write({
        format: 'umd',
        sourceMap: true,   //加上这里即可 调试功能
        moduleName: 'main', //umd或iife模式下，若入口文件含 export，必须加上该属性
        dest: 'rel/bundle.js'
    });

    //等价于

    // var result = bundle.generate({ //生成一个 bundle + sourcemap
    //     format: 'umd',
    //     moduleName: 'main',
    //     dest: 'rel/bundle.js',
    // });
    //
    // fs.writeFileSync( 'rel/bundle.js', result.code );
});
// http://www.cnblogs.com/vajoy/p/5518442.html


