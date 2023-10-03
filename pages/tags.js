/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getTags } from '../utils/data/tagsData';
import TagCard from '../components/TagCard';
import CreateTagForm from '../components/Forms/CreateTagForm';

export default function Tags() {
  const { user } = useAuth();
  const [tags, setTags] = useState([]);

  const getAllTags = () => {
    getTags(user.uid).then(setTags);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <div className="container">
      <div className="flex-start my-4">
        <CreateTagForm />
        <div className="text-center my-4 d-flex flex-wrap">
          {tags.map((tag) => (
            <TagCard key={tag.id} tagObj={tag} onUpdate={getAllTags} />
          ))}
        </div>
      </div>
    </div>
  );
}
