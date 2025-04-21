import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import useAuth from "@/hook/useAuth";
import useCountry from "@/hook/useCountry";
import axiosPublic from "@/utils/axiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocalLogin = () => {
  const { loginWithGoogle } = useAuth();
  const country = useCountry();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
          role: "worker",
          member_since: res.user.metadata.createdAt,
          uid: res.user.uid,
          country,
        };

        axiosPublic
          .post("/auth/user", userInfo)
          .then((data) => {
            if (data?.data?.data?.insertedId) {
              toast.success("User registered successfully!!");
              navigate("/");
            }
          })
          .catch((err) => {
            console.log(`Error in saving user info: ${err}`);
            navigate("/");
          });
      })
      .catch((err) => {
        console.log(`Error in google login: ${err}`);
      });
  };

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-center gap-4">
        <div className="h-px bg-text/30 grow"></div>
        <p className="text-sm font-inter text-text capitalize">or login with</p>
        <div className="h-px bg-text/30 grow"></div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 text-xl w-full border-[2px] border-[#FFA500] text-[#FFA500] rounded-lg py-3 px-6 font-inter font-semibold cursor-pointer"
        >
          <FcGoogle />
          <span>Google</span>
        </button>

        <button className="flex items-center justify-center gap-3 text-xl w-full border-[2px] border-[#3b5998] text-[#3b5998] rounded-lg py-3 px-6 font-inter font-semibold cursor-pointer">
          <FaFacebookF />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
