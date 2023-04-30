import React from 'react';

const ListUsers = () => {
    const users = [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          role: "user",
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "janedoe@example.com",
          role: "admin",
        },
        {
          id: 3,
          name: "Bob Smith",
          email: "bobsmith@example.com",
          role: "user",
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
        <div>
             <div className="bg-white p-4 rounded-lg shadow-md dark:bg-lightblack">
          <ul>
            {users.map((user) => (
              <li className="flex justify-between items-center py-2" key={user.id}>
                <div>
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="text-green-500 hover:text-green-700 focus:outline-none"
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
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
    );
}

export default ListUsers;
