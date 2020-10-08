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
  },

  set changeCountCartList(itemCart) {
    const newItemCart = this.cartListData.find(item => item.id === itemCart.id);
    newItemCart.count = itemCart.count;

    setLocalStorage('cartList', this.cartList);
  },

  set deleteItemCart(idd) {
    let index = -1;
    this.cartList.forEach((item, i) => {
      if (item.id === idd) {
        index = i;
      }
    });
    this.cartList.splice(index, 1);
    setLocalStorage('cartList', this.cartList);
  }

}

export default userData;