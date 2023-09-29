import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePost } from '../../../utils/data/PostData';
import PostForm from '../../../components/PostForm';

export default function EditPost() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { Id } = router.query;

  useEffect(() => {
    getSinglePost(Id).then(setEditItem);
  }, [Id]);

  return (<PostForm obj={editItem} />);
}
