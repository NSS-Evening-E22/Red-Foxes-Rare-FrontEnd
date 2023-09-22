const dbUrl = 'https://localhost:7033';

const getPosts = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(Object.values(data)))
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
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
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

const updatePosts = (Id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/posts/${Id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Id),
  })
    .then(resolve)
    .catch(reject);
});

const getSinglePost = (Id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/posts/${Id}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getPosts,
  createPosts,
  deletePost,
  updatePosts,
  getSinglePost,
};
