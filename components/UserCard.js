import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function RareUser({ rareuserObj }) {
  return (
    <div className="user-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={rareuserObj.profileImageUrl} />
        <Card.Body>
          <Card.Title>{rareuserObj.firstName}{rareuserObj.lastName}</Card.Title>
          <Card.Text>
            {rareuserObj.bio}
            {rareuserObj.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

RareUser.propTypes = {
  rareuserObj: PropTypes.shape({
    profileImageUrl: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    createdOn: PropTypes.number,
  }).isRequired,
};
