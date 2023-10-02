import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getPosts } from '../../utils/data/PostData';
// import { useAuth } from '../../utils/context/authContext';
import PostCard from '../../components/PostCard';

function Home() {
  const [posts, setPosts] = useState([]);

  const getAllThePosts = () => {
    getPosts()
      .then((data) => {
        if (data.length === 0) {
          console.log('No posts found.');
          // You can display a message to the user or handle it as needed
        } else {
          console.log('Posts received:', data);
          setPosts(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
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

export default Home;
