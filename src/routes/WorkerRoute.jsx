import Spinner from "@/components/shared/Spinner/Spinner";
import useAuth from "@/hook/useAuth";
import useWorker from "@/hook/useWorker";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const WorkerRoute = ({ children }) => {
  const { authUser, isAuthLoading } = useAuth();
  const [isWorker, roleLoading] = useWorker();
  const location = useLocation();

  if (isAuthLoading || roleLoading) return <Spinner />;

  if (authUser && isWorker?.role === "employer") {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};

WorkerRoute.propTypes = { children: PropTypes.node };

export default WorkerRoute;
