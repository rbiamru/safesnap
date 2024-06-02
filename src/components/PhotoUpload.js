import React from 'react';

function PhotoUpload() {
  return (
    <div className="my-4">
      <h2 className="text-2xl mb-4">Upload Photo</h2>
      <form>
        <input type="file" className="mb-4" />
        <div>
          <input type="text" placeholder="Tags (e.g., #public, #private)" className="border p-2 w-full mb-4"/>
        </div>
        <button className="bg-blue-500 text-white p-2">Upload</button>
      </form>
    </div>
  );
}

export default PhotoUpload;
