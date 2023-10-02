const dbUrl = 'https://localhost:7033';

const getAllCategories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
export default getAllCategories;
