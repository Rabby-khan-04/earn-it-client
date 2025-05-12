import Spinner from "@/components/shared/Spinner/Spinner";
import useAuth from "@/hook/useAuth";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authUser, isAuthLoading, userInfo } = useAuth();

  if (isAuthLoading) return <Spinner />;

  if (authUser && userInfo) {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};

ProtectedRoute.propTypes = { children: PropTypes.node };

export default ProtectedRoute;
