import React from 'react';

function Gallery() {
  return (
    <div className="my-4">
      <h2 className="text-2xl mb-4">Public Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Map through photos and display them here */}
        <div className="border p-2">Photo 1</div>
        <div className="border p-2">Photo 2</div>
        <div className="border p-2">Photo 3</div>
      </div>
    </div>
  );
}

export default Gallery;
