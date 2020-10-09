
const getResourse = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error at the address ${url}. Error status - ${response.status}`);
  }
  return await response.json();
};

// getResourse('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log(data));


export const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });
  if (!response.ok) {
    throw new Error(`Error at the address ${url}. Error status - ${response.status}`);
  }
  return await response.json();
};
