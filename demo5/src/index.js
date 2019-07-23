
// import './a.js';
// import './b.js';
// import _ from 'lodash'; // 1mb

// function getComponent() {
  // 使用 异步的形式导入 lodash，default: _ 表示用 _ 代指 lodash
//   return import('lodash').then(({ default: _ }) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['hello', 'world'], '-')
//     return element
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element)
// })
import(/* webpackChunkName: 'a'*/ './a').then(function(a) {
  console.log(a)
})

import(/* webpackChunkName: 'b'*/ './b').then(function(b) {
  console.log(b)
})

import(/* webpackChunkName: 'use-lodash'*/ 'lodash').then(function(_) {
  console.log(_.join(['1', '2']))
})
// 业务逻辑1mb
// console.log(_.join(['a','b','c'],'***'));
// 此处省略10万行业务逻辑
// console.log(_.join(['a','b','c'],'***'));
