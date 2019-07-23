import piggril2 from './piggril2.png';
function createAvatar() {
  var img = new Image();
  img.src = piggril2
  var root = document.getElementById('root');
  root.append(img)
  img.classList.add('avatar')
}
export default createAvatar;