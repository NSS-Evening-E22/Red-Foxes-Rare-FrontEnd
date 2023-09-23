import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/data/userData';
import { useAuth } from '../utils/context/authContext';
import UserCard from '../components/UserCard';

function Users() {
  const [rareusers, setRareUsers] = useState([]);
  const { user } = useAuth();

  const getAllUsers = () => {
    getUsers(user.id).then(setRareUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {rareusers.map((rareuser) => (
          <UserCard key={rareuser.Id} userObj={rareuser} onUpdate={getAllUsers} />
        ))}
      </div>

    </div>
  );
}

export default Users;
