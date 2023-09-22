import { React, useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import RareUser from '../components/UserCard';
import { getUserDetails } from '../utils/data/userData';

export default function DisplayUser() {
  const [rareusers, setRareUsers] = useState([]);
  const { rareuser } = useAuth();

  useEffect(() => {
    getUserDetails(rareuser.uid).then(setRareUsers);
  }, []);

  return (
    <div className="details">
      {rareusers.map((user) => (
        <RareUser key={rareuser.id} rareuserObj={user} />
      ))}
    </div>
  );
}
