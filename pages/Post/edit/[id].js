import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostForm from '../../../components/Forms/PostForm';
import getSinglePost from '../../../utils/data/postData';

export default function EditPost() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { Id } = router.query;

  useEffect(() => {
    getSinglePost(Id).then(setEditItem);
  }, [Id]);

  return (<PostForm obj={editItem} />);
}
