import Head from './header';
import Slidebar from './slidebar';
import Content from './content';
import piggril2 from './piggril2.png';
import createAvatar from './createAvatar.js'
// import './index.css';
import './index.scss';
import './style.css';
import {add} from './math.js';
add(1,2);
createAvatar();
var img = new Image();
img.src = piggril2
var root = document.getElementById('root');
root.append(img)
img.classList.add('avatar')
// var head = require('./header');
// var slidebar = require('./slidebar');
// var content = require('./content');
// consol.log(1)
//var avatar = require('./piggril2.png'); // node的common.js的引入方法

// var dom = document.getElementById('#root');

var btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.appendChild(btn);

btn.onclick = function(){
  var div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
}

const arr = [
  new Promise(() => {}),
  new Promise(() => {})
];
arr.map(item => {
  console.log(item);
})

new Head();
new Content();
new Slidebar();