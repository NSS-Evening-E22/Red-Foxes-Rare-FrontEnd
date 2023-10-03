import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function TagCard({ tagObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{tagObj.label}</Card.Title>
      </Card.Body>
    </Card>
  );
}

TagCard.propTypes = {
  tagObj: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

export default TagCard;
