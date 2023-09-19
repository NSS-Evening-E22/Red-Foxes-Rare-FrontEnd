import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletePost } from '../utils/data/PostData';

function PostCard({ postObj, onUpdate }) {
  const deleteThisPost = () => {
    if (window.confirm(`Delete ${postObj.title}?`)) {
      deletePost(postObj.Id).then(() => onUpdate());
    }
  };

  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Img
        variant="top"
        src={postObj.image}
        alt={postObj.title}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '10px' }}>
          {postObj.title}
        </Card.Title>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          {postObj.content}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="dark" className="mr-2" href={`/post/${postObj.Id}`}>
            VIEW
          </Button>
          <Button variant="dark" className="mr-2" href={`/post/Edit/${postObj.Id}`}>
            EDIT
          </Button>
          <Button variant="dark" onClick={deleteThisPost}>
            DELETE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    Id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostCard;
