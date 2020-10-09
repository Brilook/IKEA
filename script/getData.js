const PARAM = {
  cat: 'category',
  subcat: 'subcategory',
  search: ['category', 'description', 'name', 'subcategory', 'id']
}

export const getData = {
  url: 'database/dataBase.json',

  async getResourse(url) {
    const respons = await fetch(url);
    if (!respons.ok) {
      throw new Error(`Error at the address ${url}. Error status - ${respons.status}`)
    };
    return await respons.json();
  },


  get(process) {
    this.getResourse(this.url)
      .then(process)
      .catch(error => console.error(error)) // вывести пользователю
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
      const result = data.reduce((acc, { category }) => {
        if (!acc.includes(category)) acc.push(category);
        return acc;
      }, []);
      callback(result);
    })
  },

  subCatalog(value, callback) {
    this.get(data => {
      const result = data.reduce((acc, item) => {
        if (!acc.includes(item.subcategory) && item.category === value) acc.push(item.subcategory);
        return acc;
      }, []);
      callback(result);
    })
  },

}