import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export default function SinglePostPage({ postObj }) {
  // destructure object
  // returns array of objects
  // map through array and return what you want
  const { tags } = postObj;
  const author = `${postObj?.rareUser?.firstName} ${postObj?.rareUser?.lastName}`;

  return (
    <>
      <div>
        <h1>Title: {postObj.title}</h1>
        <h2>Category: {postObj?.category?.label}</h2>
      </div>
      <div>
        <Card.Img variant="top" src={postObj.image} alt="image of something" style={{ height: '200px', objectFit: 'cover', borderRadius: '3px' }} />
      </div>
      <div>
        {postObj.content}
      </div>
      <div>
        <h6>{`Created by: ${author}`}</h6>
      </div>
      <div>
        tags: {tags?.map((tag) => tag.label)}
      </div>
      <div>
        <Button>View Comments</Button>
        <Button>Comment</Button>
        <span>Reactions</span>
      </div>
    </>
  );
}

SinglePostPage.propTypes = {
  postObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })),
    rareUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    category: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  }).isRequired,
};
