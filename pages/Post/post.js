import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getPosts } from '../../utils/data/PostData';
import { useAuth } from '../../utils/context/authContext';
import PostCard from '../../components/PostCard';

function PostHome() {
  const [posts, setPosts] = useState([]);

  const { user } = useAuth();

  const getAllThePosts = () => {
    getPosts(user).then(setPosts);
  };

  useEffect(() => {
    getAllThePosts();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/Post/newPost" passHref>
        <Button variant="dark">Add A Post</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard key={post.Id} postObj={post} onUpdate={getAllThePosts} />
        ))}
      </div>

    </div>
  );
}

export default PostHome;
