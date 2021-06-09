/*const buttomElem = document.querySelector('.single-use-btn');
function getClick () {
  console.log('clicked')
}
buttomElem.addEventListener('click', getClick, { once: true });*/

const buttomElem = document.querySelector('.single-use-btn');
function handleClick () {
  console.log('clicked');
  buttomElem.removeEventListener('click', handleClick);
}
buttomElem.addEventListener('click', handleClick);
