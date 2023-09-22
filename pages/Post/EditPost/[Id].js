import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePost } from '../../../utils/data/PostData';
import PostForm from '../../../components/PostForm';

export default function EditPost() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSinglePost(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<PostForm obj={editItem} />);
}
