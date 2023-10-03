import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletePost } from '../utils/data/postData';

function PostCard({ postObj, onUpdate }) {
  const deleteThisPost = () => {
    if (window.confirm(`Delete ${postObj.title}?`)) {
      deletePost(postObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card
      className="hoverable-card"
      style={{ width: '20rem', margin: '10px', padding: '10px' }}
    >
      <Card.Img
        variant="top"
        src={postObj.image}
        alt={postObj.title}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '18px' }}>
          {postObj.title}
        </Card.Title>
        <p className="card-text bold" style={{ marginBottom: '18px' }}>
          {postObj.content}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link passHref href={`/post/${postObj.id}`}>
            <Button variant="dark" id="post-view" className="mr-2">
              VIEW
            </Button>
          </Link>
          <Button variant="dark" id="post-edit" className="mr-2" href={`/post/edit/${postObj.id}`}>
            EDIT
          </Button>
          <Button variant="dark" id="post-delete" onClick={deleteThisPost}>
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
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostCard;
