import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { alertActions } from "../_store";

export default Alert;

function Alert() {
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useSelector((x) => x.alert.value);

  useEffect(() => {
    // clear alert on location change
    dispatch(alertActions.clear());
  }, [location]);

  if (!alert) return null;

  return (
    <div className="absolute top-10 left-2/4">
      <div className="m-3">
        <div
          className={`bg-red-100 border ${
            alert.type === "success" ? " border-green-400 text-green-700" : "border-red-400 text-red-700"
          } px-4 py-3 rounded`}
          relative
          role="alert"
        >
          <span className="block sm:inline">{alert.message}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => dispatch(alertActions.clear())}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
