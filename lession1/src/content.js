
function Header(){
  var dom = document.getElementById('root');
  var content = document.createElement('div');
  content.innerText = 'content content';
  dom.append(content);
}

export default Header;