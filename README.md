#课前测


#问题
##使用`npm run test`报错
`vuex requires a Promise polyfill in this browser.`

解决办法
`npm install --save babel-polyfill`
然后在`test/unit/index.js`中添加`import 'babel-polyfill'`

##支持sass写法
`cnpm install --save-dev sass-load node-sass`

##todo:单元测试还有问题，能够通过console.log打印出变量，但是在控制台提示undefined

#注意
1. vue中store的数据更新需要commit，针对数组和对象的数据触发需要使用vue提到的相关方法
