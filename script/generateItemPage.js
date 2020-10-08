import { getData } from './getData.js';
import { NEWCOUNT } from './generateGoodsPage.js';

const generateItemPage = () => {

  const renderCard = ({ category, count, description, id, img, name: itemName, subcategory, price }) => {


    const goodImages = document.querySelector('.good-images');
    const goodItemNew = document.querySelector('.good-item__new');
    const goodItemHeader = document.querySelector('.good-item__header');
    const goodItemDescription = document.querySelector('.good-item__description');
    const goodItemEmpty = document.querySelector('.good-item__empty');
    const goodItemPriceValue = document.querySelector('.good-item__price-value');
    const btnGood = document.querySelector('.btn-good');
    const btnAddWshlist = document.querySelector('.btn-add-wishlist');

    goodImages.textContent = '';

    goodItemHeader.textContent = itemName;
    goodItemDescription.textContent = description;
    goodItemPriceValue.textContent = price;
    btnGood.dataset.idd = id;
    btnAddWshlist.dataset.idd = id;

    img.forEach(item => {
      goodImages.insertAdjacentHTML('afterbegin', `
      <div class="good-image__item">
        <img src="${item}" alt="${itemName} - ${description}">
      </div>
      `);
    });

    if (count > NEWCOUNT) {
      goodItemNew.style.display = 'block';
    } else if (!count) {
      goodItemEmpty.style.display = 'block';
      btnGood.style.display = 'none';
    }
  };

  if (location.hash && location.pathname.includes('card')) {
    getData.item(location.hash.substring(1), renderCard);
  }
};

export default generateItemPage;