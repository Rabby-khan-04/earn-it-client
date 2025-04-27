import Spinner from "@/components/shared/Spinner/Spinner";
import useAuth from "@/hook/useAuth";
import useEmployer from "@/hook/useEmployer";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const EmployerRoute = ({ children }) => {
  const { authUser, isAuthLoading } = useAuth();
  const [isEmployer, roleLoading] = useEmployer();
  const location = useLocation();

  if (isAuthLoading || roleLoading) return <Spinner />;

  if (authUser && isEmployer?.role === "employer") {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};

EmployerRoute.propTypes = {
  children: PropTypes.node,
};

export default EmployerRoute;
