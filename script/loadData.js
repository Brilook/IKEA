  import {
    getData
  } from './getData.js'

  const cartList = [{
      id: 'idd023',
      count: 32
    },
    {
      id: 'idd008',
      count: 5
    },
    {
      id: 'idd026',
      count: 1
    }
  ];

  export const loadData = () => {

    if (location.hash) {

      getData.item(location.hash.substring(1), data => console.log(data));
    }
    if (location.pathname.includes('cart')) {
      getData.cart(cartList, data => console.log(data));
    }

    // getData.catalog(data => console.log('catalog', data));
    // getData.subCatalog('Декор', data => console.log('subcatalog', data));
    // getData.subCatalog('Текстиль', data => console.log('subcatalog', data));
  }