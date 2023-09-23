/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSinglePost } from '../../utils/data/PostData';
import SinglePostPage from '../../components/SinglePostPage';

export default function ViewSinglePost() {
  const [post, setPost] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSinglePost(id).then(setPost);
  }, []);

  console.warn(post);
  return (
    <>
      <SinglePostPage key={post.id} postObj={post} />
    </>
  );
}
