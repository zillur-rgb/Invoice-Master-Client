// import { useAuthState } from "react-firebase-hooks/auth";
// import { Navigate, useLocation } from "react-router-dom";
// import { auth } from "../../firebase.init";

import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";

// const RequireAuth = ({ children }) => {
//   const [user] = useAuthState(auth);
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/signin" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default RequireAuth;

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return toast("Loading user info");
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
