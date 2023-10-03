/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getUserPosts } from '../../utils/data/postData';
import PostCard from '../../components/PostCard';

export default function UserPosts() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  const getUP = () => {
    getUserPosts(user.id).then(setPosts);
  };

  useEffect(() => {
    getUP();
  }, []);

  return (
    <div className="container">
      <div className="flex-start my-4">
        <Link href="/post/newPost" passHref>
          <Button variant="primary">Create Post</Button>
        </Link>
        <div className="text-center my-4 d-flex flex-wrap">
          {posts.map((post) => (
            <PostCard key={post.id} postObj={post} onUpdate={getUP} />
          ))}
        </div>
      </div>
    </div>
  );
}
