import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPosts, updatePosts } from '../../utils/data/PostData';

const initialState = {
  description: '',
  image: '',
  console: '',
  genre: '',
  title: '',
};

function PostForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.Id) {
      setFormInput(obj);
    }
  }, [obj]);

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
        .then(() => router.push(`/post/${obj.Id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPosts(payload).then(({ name }) => {
        const patchPayload = { Id: name };
        updatePosts(patchPayload).then(() => {
          router.push('/');
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
  }),
};

PostForm.defaultProps = {
  obj: initialState,
};

export default PostForm;
