import { Navigate } from "react-router-dom";
import { useUser } from "../context/AuthContext";

const ProtectedAuthRoute = ({ children }) => {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAuthRoute;
