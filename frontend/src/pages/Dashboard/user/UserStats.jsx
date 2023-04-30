import React from 'react';

const UserStats = () => {
    const [editedImages, setEditedImages] = React.useState(120);
    const [uploadedImages, setUploadedImages] = React.useState(230);
  
    // TODO: Fetch edited and uploaded image count from server
    
  
    return (
      <div className="max-w-screen-lg mx-auto mt-8 dark:bg-black">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="bg-white p-4 rounded-lg shadow dark:bg-lightblack">
            <h2 className="text-lg font-semibold mb-2 ">Edited Images</h2>
            <p className="text-4xl font-bold">{editedImages}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow dark:bg-lightblack">
            <h2 className="text-lg font-semibold mb-2">Uploaded Images</h2>
            <p className="text-4xl font-bold">{uploadedImages}</p>
          </div>
        </div>
      </div>
    );
}

export default UserStats;
