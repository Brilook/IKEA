import { getLocalStorage, setLocalStorage } from './storage.js';


const userData = {
  wishListData: getLocalStorage('wishList'),

  get wishList() {
    return this.wishListData;
  },
  set wishList(id) {
    if (this.wishListData.includes(id)) {
      const index = this.wishListData.indexOf(id);
      this.wishListData.splice(index, 1);
    } else {
      this.wishListData.push(id);
    }
    setLocalStorage('wishList', this.wishListData);
  },

  cartListData: getLocalStorage('cartList'),

  get cartList() {
    return this.cartListData;
  },
  set cartList(id) {
    let cartObj = this.cartListData.find(item => item.id === id);
    if (cartObj) {
      cartObj.count++;
    } else {
      cartObj = {
        id,
        count: 1
      };
      this.cartListData.push(cartObj);
    }
    setLocalStorage('cartList', this.cartList);
  }
}

export default userData;