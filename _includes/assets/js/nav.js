function handleClickOutside(e) {
  if (e.target.id !== 'menu-container') {
    document.getElementById('menu-container').classList = '';
  }
}

function handleEscKey(e) {
  if (e.keyCode === 27) {
    document.getElementById('menu-container').classList = '';
  }
}

// eslint-disable-next-line no-unused-vars
function handleMenuClick() {
  const container = document.getElementById('menu-container');
  const menuOpen = container.classList.contains('open');

  if (menuOpen) {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscKey);
    document.getElementById('menu-container').classList = '';
  } else {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    container.classList.add('open');
  }
}
