import React from "react";

const ListUsers = () => {
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      role: "User",
      created: "2023-05-01T17:42:40.158Z",
      updated: "2023-05-01T17:42:40.158Z",
      isVerified: true,
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Smith",
      email: "bobsmith@editme.online",
      role: "Admin",
      created: "2023-05-01T17:42:40.158Z",
      updated: "2023-05-01T17:42:40.158Z",
      isVerified: true,
    },
    {
      id: 3,
      firstName: "Sheki",
      lastName: "Johnson",
      email: "shekijohnson@example.com",
      role: "User",
      created: "2023-05-01T17:42:40.158Z",
      updated: "2023-05-01T17:42:40.158Z",
      isVerified: false,
    },
    {
      id: 3,
      firstName: "Xenol",
      lastName: "M.",
      email: "xenolm@example.com",
      role: "User",
      created: "2023-05-01T17:42:40.158Z",
      updated: "2023-05-01T17:42:40.158Z",
      isVerified: false,
    },
  ];
  const handleEditUser = (id) => {
    console.log(`Editing user with ID ${id}`);
  };

  const handleDeleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");

    if (confirmDelete) {
      console.log(`Deleting user with ID ${id}`);
    }
  };
  return (
    <div className="container p-2 mx-auto sm:p-4">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-gray text-lightblack dark:bg-gray ">
            <tr className="text-left">
              <th className="p-3">Id #</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Created</th>
              <th className="p-3">Updated</th>
              <th className="p-3">Is Verified?</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="border-b border-opacity-20 even:bg-slate-300 dark:even:bg-slate-700">
                <>
                  <td className="p-3">
                    <p>{user.id}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.firstName}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.lastName}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.email}</p>
                  </td>
                  <td className="p-3 ">
                    <p>{user.role}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.created?.split("T")[0]}</p>
                  </td>
                  <td className="p-3">{user.updated?.split("T")[0]}</td>
                  <td className="p-3 text-center">{user.isVerified?"Yes":"No"}</td>
                  <td className="p-3">
                    <button
                      type="button"
                      className="text-green-800 hover:text-green-700 focus:outline-none mx-2"
                      onClick={() => handleEditUser(user.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </button>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUsers;
