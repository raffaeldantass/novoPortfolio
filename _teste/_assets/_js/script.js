var sideMenu = document.getElementsByClassName('menu__side-menu')[0];
var sideMenuCloseButton = document.getElementsByClassName('menu__close-button')[0];

function checaMenu() {
  if (sideMenu.style.display == 'flex') {
		sideMenu.style.display = 'none';
  } else {
		sideMenu.style.display = 'flex'; 
  }
}