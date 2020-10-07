const PARAM = {
  cat: 'category',
  subcat: 'subcategory',
  search: ['category', 'description', 'name', 'subcategory', 'id']
}

export const getData = {
  url: 'database/dataBase.json',
  get(process) {
    fetch(this.url)
      .then(promise => promise.json())
      .then(process)
  },
  wishList(list, callback) {
    this.get(data => {
      const result = data.filter(item => list.includes(item.id));
      callback(result);
    })
  },
  item(value, callback) {
    this.get(data => {
      const result = data.find(item => item.id === value);
      callback(result);
    })
  },
  cart(list, callback) {
    this.get(data => {
      const result = data.filter(item => list.some(obj => obj.id === item.id));
      callback(result);
    })
  },
  category(prop, value, callback) {
    this.get(data => {
      const result = data.filter(item => item[PARAM[prop]].toLowerCase() === value.toLowerCase());
      callback(result);
    })
  },
  search(value, callback) {
    this.get(data => {
      const result = data.filter(item => {
        for (const prop in item) {
          if (PARAM.search.includes(prop) &&
            item[prop].toLowerCase().includes(value.toLowerCase())) {
            return true;
          }
        }
      });
      callback(result);
    })
  },
  catalog(callback) {
    this.get(data => {
      const result = data.reduce((acc, item) => {
        const catName = item[PARAM.cat];
        if (!acc.includes(catName)) acc.push(catName);
        return acc;
      }, []);
      callback(result);
    })
  },
  subCatalog(value, callback) {
    this.get(data => {
      const result = data.reduce((acc, item) => {
        const subCatName = item[PARAM.subcat];
        if (!acc.includes(subCatName) && item[PARAM.cat] === value) acc.push(subCatName);
        return acc;
      }, []);
      callback(result);
    })
  },

}