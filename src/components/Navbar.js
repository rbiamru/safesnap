import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">SafeSnap</div>
        <div>
          <a href="/" className="text-white px-3">Home</a>
          <a href="/profile" className="text-white px-3">Profile</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
