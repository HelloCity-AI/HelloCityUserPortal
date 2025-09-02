'use client';

import React from 'react';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

const UserProfileCardForMidTerm: React.FC = () => {
  const userData = useSelector((state: RootState) => state.user.userData);

  const { email, userId } = userData;
  const AvatarImg = '';
  return (
    <div className="flex items-center gap-5 rounded-2xl text-white">
      <div
        className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-white"
        data-testid="avatar-container"
      >
        {!AvatarImg ? (
          <span className="material-icons text-8xl text-gray-400">account_circle</span>
        ) : (
          <Avatar
            data-testid="user-avatar"
            alt="User Avatar"
            src={AvatarImg}
            sx={{ width: 100, height: 100 }}
          />
        )}
      </div>
      <div>
        <span className="flex text-xl font-bold text-gray-500">{email}</span>
        <span className="flex text-gray-500">@{userId}</span>
      </div>
    </div>
  );
};

export default UserProfileCardForMidTerm;
