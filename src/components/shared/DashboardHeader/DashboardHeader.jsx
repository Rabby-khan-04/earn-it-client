import logo from "@/assets/logo.png";
import useAuth from "@/hook/useAuth";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDownContent from "../DropDownContent/DropDownContent";

const DashboardHeader = () => {
  const { authUser } = useAuth();
  return (
    <header className="py-5">
      <div className="container flex items-center justify-between">
        <div className="">
          <Link
            to="/dashboard/my-jobs"
            className="font-dm-sans text-lg font-semibold"
          >
            My Tasks
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="inline-block">
            <img src={logo} className="w-40" alt="" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {authUser ? (
            <>
              <DropdownMenu className="">
                <DropdownMenuTrigger asChild>
                  <img
                    src={authUser.photoURL}
                    className="size-10 object-cover rounded-full cursor-pointer"
                    alt=""
                  />
                </DropdownMenuTrigger>
                <DropDownContent />
              </DropdownMenu>

              <Link to="/dashboard/jobs" className="btn__primary__sm">
                Browse Jobs
              </Link>
            </>
          ) : (
            <>
              <Link className="btn__primary__sm" to="/auth/login">
                Login
              </Link>
              <Link className="btn__secondary__sm" to="/auth/register">
                Join
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
