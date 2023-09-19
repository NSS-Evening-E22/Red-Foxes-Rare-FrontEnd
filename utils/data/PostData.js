
const dbUrl = 'https://localhost:7033';


const getPosts = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/posts`, {
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

const createPosts = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deletePost = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updatePosts = (postObj) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/posts/${postObj.Id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postObj),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getPosts,
  createPosts,
  deletePost,
  updatePosts
}
