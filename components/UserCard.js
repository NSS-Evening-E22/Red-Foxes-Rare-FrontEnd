import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function UserCard({ userObj }) {
  return (
    <div className="user-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={userObj.profileImageUrl} />
        <Card.Body>
          <Card.Title>{userObj.firstName}{userObj.lastName}</Card.Title>
          <Card.Text>
            <p>{userObj.email}</p>
            <p>{userObj.createdOn}</p>
            <Link href={`/users/${userObj.uid}`} passHref>
              <Button id="view" className="m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                </svg>
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    profileImageUrl: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    createdOn: PropTypes.number,
    uid: PropTypes.string,
  }).isRequired,
};
