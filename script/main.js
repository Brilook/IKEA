const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const subcatalog = document.querySelector('.subcatalog')
const subcatalogHeader = document.querySelector('.subcatalog-header')

const openMenu = () => {
  catalog.classList.add('open');
  overlay.classList.add('active');
};

const closeMenu = () => {
  catalog.classList.remove('open');
  overlay.classList.remove('active');
};

const openSubMenu = event => {
  event.preventDefault();
  const target = event.target;
  const itemList = target.closest('.catalog-list__item');
  if (itemList) {
    subcatalogHeader.innerHTML = itemList.innerHTML;
    subcatalog.classList.add('subopen')
  };
}

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') closeMenu();
});