import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { createTag } from '../../utils/data/tagsData';

const initialState = {
  label: '',
};

export default function CreateTagForm() {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTag(formInput).then(() => router.push('/tags'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="tag-form d-flex align-items-center justify-content-center">
        <h2 className="text-black mt-5">New Tag</h2>
        <FloatingLabel controlId="floatingInput1" label="Tag Name" className="tag-float mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Label"
            name="label"
            value={formInput.label}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Button className="tag-submit" type="submit"> Submit </Button>
      </div>
    </Form>
  );
}
