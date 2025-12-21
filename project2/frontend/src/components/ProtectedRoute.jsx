import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();

  // ⏳ WAIT until auth is checked
  if (loading) {
    return <h3 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h3>;
  }

  // 🚫 NOT LOGGED IN
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // ✅ LOGGED IN
  return children;
};

export default ProtectedRoute;
