  import {
    getData
  } from './getData.js'
  const wishList = ['idd012', 'idd086', 'idd052', 'idd021', 'idd011', 'idd001'];

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
    if (location.search) {
      const search = decodeURI(location.search);
      const prop = search.split('=')[0].substring(1);
      const value = search.split('=')[1];
      if (prop === 's') {
        getData.search(value, data => console.log(data));
      } else if (prop === 'wishlist') {
        getData.wishList(wishList, (data => console.dir({
          wishList: data
        })));
      } else if (prop === 'cat' || prop === 'subcat') {
        getData.category(prop, value, data => console.log(data));
      }
    }
    if (location.hash) {

      getData.item(location.hash.substring(1), data => console.log(data));
    }
    if (location.pathname.includes('cart')) {
      getData.cart(cartList, data => console.log(data));
    }

    getData.catalog(data => console.log('catalog', data));
    getData.subCatalog('Декор', data => console.log('subcatalog', data));
    getData.subCatalog('Текстиль', data => console.log('subcatalog', data));
  }