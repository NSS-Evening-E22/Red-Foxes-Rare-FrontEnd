import { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard';
import { getPosts } from '../../utils/data/PostData';
import { useAuth } from '../../utils/context/authContext';

function ViewMyPosts() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getPosts(user.uid).then(setPosts);
  }, [user.uid]);

  return (
    <div className="d-flex flex-wrap">
      {posts.map((post) => (
        <PostCard key={post.id} postObj={post} />
      ))}
    </div>
  );
}

export default ViewMyPosts;
