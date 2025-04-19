// ProtectedRoute.jsx
import { Navigate} from "react-router-dom";
import { getUserData, getUserType } from "../../services/authService";

const ProtectedRoute = ({children, allowedRole }) => {
  const userType =  getUserType() 

  if (!userType) return <Navigate to="/login" />;

  if (userType !== allowedRole) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
