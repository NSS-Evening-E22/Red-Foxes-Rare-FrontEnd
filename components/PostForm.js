import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createPosts, updatePosts } from '../utils/data/PostData';
import { checkUser } from '../utils/auth';
import getAllCategories from '../utils/data/CategoryData';

const initialState = {
  image: '',
  content: '',
  title: '',
};

function PostForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [category, setCategory] = useState([]);
  const [rareUser, setRareUser] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  // useEffect(() => {
  //   if (obj.Id) {
  //     setFormInput(obj);
  //   }
  // }, [obj]);
  useEffect(() => {
    getAllCategories().then(setCategory);
    checkUser(user.uid).then(setRareUser);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.Id) {
      updatePosts(formInput)
        .then(() => router.push('/Post/post'));
    } else {
      const payload = { ...formInput, rareUser: rareUser[0].Id };
      createPosts(payload).then(({ name }) => {
        const patchPayload = { Id: name };
        updatePosts(patchPayload).then(() => {
          router.push('/Post/post');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.Id ? 'Update' : 'Create'} Post</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Post Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Post Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Last Name INPUT  */}
      <Form.Group className="mb-3" controlId="formGenre">
        <Form.Control
          type="text"
          placeholder="Content"
          value={formInput.content}
          name="content"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridLevel">
        <Form.Select
          aria-label="Category"
          name="CategoriesId"
          onChange={handleChange}
          className="mb-3"
          value={obj.categoryId}
        >
          <option value="">Select a Category</option>
          {
            category.map((Categories) => (
              <option
                key={Categories.id}
                value={Categories.id}
              >
                {Categories.label}
              </option>
            ))
          }
        </Form.Select>
      </Form.Group>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.Id ? 'Update' : 'Create'} Post</Button>
    </Form>
  );
}

PostForm.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    Id: PropTypes.string,
    categoryId: PropTypes.number,
  }),
};

PostForm.defaultProps = {
  obj: initialState,
};

export default PostForm;
