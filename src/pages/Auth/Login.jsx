import authImg from "@/assets/images/auth/auth-img.svg";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import SocalLogin from "@/components/auth/SocalLogin";
import useAuth from "@/hook/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInUser(email, password);
  };

  return (
    <section className="py-24 bg-base-100">
      <div className="container grid grid-cols-5">
        <div className="col-span-2 self-center">
          <div className="p-12 shadow-xl shadow-primary/10 rounded-2xl space-y-7">
            <div className="space-y-2">
              <h1 className="text-4xl font-dm-sans font-semibold text-title">
                Loign
              </h1>
              <p className="text-base text-text font-inter font-normal">
                Doesn{"'"}t have an account yet?{" "}
                <Link
                  to="/auth/register"
                  className="text-primary font-semibold underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-title text-lg inline-block font-dm-sans font-normal"
                >
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
                <p className="text-xs text-red-500 font-inter">
                  {errors.email && <span>This field is required</span>}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="text-title text-lg inline-block font-dm-sans font-normal"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-primary font-inter text-sm font-semibold underline cursor-pointer"
                  >
                    Forget Password?
                  </button>
                </div>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <p className="text-xs text-red-500 font-inter">
                  {errors.password && <span>This field is required</span>}
                </p>
              </div>

              <button type="submit" className="btn__primary__auth">
                <span>Login</span>
                <GoArrowUpRight className="text-xl" />
              </button>
            </form>

            <SocalLogin />
          </div>
        </div>
        <div className="col-span-3">
          <img src={authImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
