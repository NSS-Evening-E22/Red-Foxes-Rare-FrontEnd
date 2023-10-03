import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPosts, updatePosts } from '../../utils/data/postData';
import { checkUser } from '../../utils/auth';
import getAllCategories from '../../utils/data/categoryData';

const initialState = {
  ImageUrl: '',
  Content: '',
  Title: '',
  Approved: false,
  CategoryId: 0,
};

function PostForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [category, setCategory] = useState([]);
  const [, setRareUser] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllCategories().then(setCategory);
    checkUser(user.uid).then(setRareUser);
    // getPosts(user.uid);

    // if (obj.Id) setFormInput(obj);
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
    // console.warn(formInput);
    if (obj.Id) {
      updatePosts(formInput)
        .then(() => router.push('/posts'));
    } else {
      const payload = { ...formInput, PublicationDate: new Date(Date.now()), RareUserId: user.uid };
      createPosts(payload)
        .then(router.push('/posts'))
        .catch((error) => {
          console.error('API Error:', error);
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black d-flex align-items-center justify-content-center mt-5">{obj.Id ? 'Update' : 'Create'} Post</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Post Title" className="post-float1 mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a Title"
          name="Title"
          value={formInput.Title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Post Image" className="post-float2 mb-3">
        <Form.Control
          type="text"
          placeholder="Enter an image url"
          name="ImageUrl"
          value={formInput.ImageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Last Name INPUT  */}
      <FloatingLabel className="mb-3" controlId="floatingTextarea" label="Content">
        <Form.Control
          as="textarea"
          placeholder="Content"
          style={{ height: '200px' }}
          value={formInput.Content}
          name="Content"
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formGridLevel">
        <Form.Select
          aria-label="Category"
          name="CategoryId"
          onChange={handleChange}
          className="mb-3"
          value={obj.CategoryId}
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
      <Button type="submit" onClick={handleSubmit}>{obj.Id ? 'Update' : 'Create'} Post</Button>
    </Form>
  );
}

PostForm.propTypes = {
  obj: PropTypes.shape({
    ImageUrl: PropTypes.string,
    Content: PropTypes.string,
    Title: PropTypes.string,
    Id: PropTypes.string,
    CategoryId: PropTypes.number,
    RareUserId: PropTypes.string,
    Approved: PropTypes.bool,
  }),
};

PostForm.defaultProps = {
  obj: initialState,
};

export default PostForm;
