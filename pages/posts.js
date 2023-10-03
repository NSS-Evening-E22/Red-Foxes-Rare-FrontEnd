/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import PostCard from '../components/PostCard';
import { getPosts } from '../utils/data/postData';

function Posts() {
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
      <Link href="/post/newPost" passHref>
        <Button variant="dark" className="add-post">Add A Post</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard key={post.Id} postObj={post} onUpdate={getAllThePosts} />
        ))}
      </div>

    </div>
  );
}

export default Posts;
