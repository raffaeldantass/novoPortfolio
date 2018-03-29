var sideMenu = document.getElementsByClassName('menu__side-menu')[0];

function checaMenu() {
  if (sideMenu.style.display == 'flex') {
    sideMenu.style.display = 'none';
  } else {
    sideMenu.style.display = 'flex';
  }
}