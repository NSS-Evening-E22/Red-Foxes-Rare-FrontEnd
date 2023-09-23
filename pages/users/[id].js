import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleUser } from '../../utils/data/userData';

function ViewSingleUser() {
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleUser(id).then(setUserDetails);
  }, [id]);

  return (
    <div className="mt-4 d-flex flex-wrap">
      <div className="ms-4 details">
        <h3 className="title-text">
          {userDetails.firstName}{userDetails.lastName}
          <p>{userDetails.email}</p>
        </h3>
        <hr />
        <p className="display-text">{userDetails.bio}</p>
        <p> Has been a user since: {userDetails.createdOn}</p>
      </div>
    </div>
  );
}

export default ViewSingleUser;
