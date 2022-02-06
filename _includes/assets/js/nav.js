function handleClickOutside(e) {
  if (!document.getElementById('menu-container').contains(e.target)) {
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
    document.getElementById('menu-container').classList = '';
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscKey);
  } else {
    container.classList.add('open');
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
  }
}
