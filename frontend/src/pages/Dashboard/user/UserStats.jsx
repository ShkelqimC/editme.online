import React from "react";

const UserStats = () => {
  const [editedImages, setEditedImages] = React.useState(120);
  const [uploadedImages, setUploadedImages] = React.useState(230);

  // TODO: Fetch edited and uploaded image count from server

  return (
    <section className="py-6">
      <div className="container md:max-w-2xl grid md:grid-cols-2  gap-6 mx-auto sm:grid-cols-1">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:bg-lightblack">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">{editedImages}</p>
            <p className="capitalize">Edited Images</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:bg-lightblack">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">{uploadedImages}</p>
            <p className="capitalize">Upload Images</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStats;
