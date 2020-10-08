import { getData } from './getData.js'

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


  if (location.pathname.includes('cart')) {
    getData.cart(cartList, data => console.log(data));
  }


}