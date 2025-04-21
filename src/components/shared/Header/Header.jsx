import logo from "@/assets/logo.png";
import useAuth from "@/hook/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { authUser, singoutUser } = useAuth();

  const handleSignOut = () => {
    singoutUser();
  };

  return (
    <header className="py-5 absolute top-0 w-full z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="inline-block">
            <img src={logo} className="w-40" alt="" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {authUser ? (
            <>
              <img
                src={authUser.photoURL}
                className="size-10 object-cover rounded-full"
                alt=""
              />
              <button onClick={handleSignOut} className="btn__primary__sm">
                Logout
              </button>
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

export default Header;
