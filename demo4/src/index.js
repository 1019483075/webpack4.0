// 全局引入js
// import '@babel/polyfill'
// import { promises } from 'fs';

// 测试es6语法是否通过babel转义
const array = [1,2,3];
const isEs6 = () => console.log(...array);

isEs6();

const arr = [new Promise(() => {}),new Promise(() => {})]

arr.map(item => {
  console.log(item)
})
