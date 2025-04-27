import Spinner from "@/components/shared/Spinner/Spinner";
import useAdmin from "@/hook/useAdmin";
import useAuth from "@/hook/useAuth";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { authUser, isAuthLoading } = useAuth();
  const [isAdmin, roleLoading] = useAdmin();
  const location = useLocation();

  if (isAuthLoading || roleLoading) return <Spinner />;

  if (authUser && isAdmin?.role === "employer") {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};

AdminRoute.propTypes = { children: PropTypes.node };

export default AdminRoute;
