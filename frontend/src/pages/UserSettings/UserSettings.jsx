import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../features/userSlice";
const UserSettings = () => {
  const user = useSelector((state) => state?.userData?.user);
  const success = useSelector((state) => state?.userData?.success);
  const error = useSelector((state) => state?.userData?.error);
  const dispatch = useDispatch();

  const handleDeleteUser = useCallback((id) => dispatch(deleteUser(id)), [dispatch]);

  return (
    <div>
      <p id="welcome-text">
        Welcome <b>{user?.username}</b>. You have access to the
        <b> {user?.isAdmin ? "admin" : "user"}</b> role.
      </p>
      <p className="text-center pt-2">Delete Users:</p>
      <div className="flex pt-6">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2 flex-1"
          onClick={() => handleDeleteUser(1)}
          id="delete-admin-button"
        >
          Delete Admin
        </button>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2 flex-1"
          onClick={() => handleDeleteUser(2)}
          id="delete-user-button"
        >
          Delete User
        </button>
      </div>
      <div className="pt-4" id="delete-status-container">
        {success && <p className="text-green-600">User has been deleted successfully...</p>}
        {error && <p className="text-red-600">You are not allowed to delete this user!</p>}
      </div>
    </div>
  );
};

export default UserSettings;
