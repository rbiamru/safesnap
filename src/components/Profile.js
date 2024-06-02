import React from 'react';

function Profile() {
  return (
    <div className="my-4">
      <h2 className="text-2xl mb-4">Profile</h2>
      <div className="border p-4">
        <h3 className="text-xl">User Name</h3>
        <p>Bio: A brief user bio goes here.</p>
        <p>Location: City, Country</p>
      </div>
    </div>
  );
}

export default Profile;
