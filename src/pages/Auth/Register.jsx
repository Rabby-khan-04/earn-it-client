import authImg from "@/assets/images/auth/auth-img.svg";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import SocalLogin from "@/components/auth/SocalLogin";
import useAuth from "@/hook/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;

    createUser(name, photo, email, password);
  };

  return (
    <section className="py-24 bg-base-100">
      <div className="container grid grid-cols-5">
        <div className="col-span-2 self-center">
          <div className="p-12 shadow-xl shadow-primary/10 rounded-2xl space-y-7">
            <div className="space-y-2">
              <h1 className="text-4xl font-dm-sans font-semibold text-title">
                Register
              </h1>
              <p className="text-base text-text font-inter font-normal">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-primary font-semibold underline"
                >
                  Login
                </Link>
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-title text-lg inline-block font-dm-sans font-normal"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <p className="text-xs text-red-500 font-inter">
                  {errors.name && <span>This field is required</span>}
                </p>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="photo"
                  className="text-title text-lg inline-block font-dm-sans font-normal"
                >
                  Photo
                </label>
                <Input
                  type="url"
                  id="photo"
                  placeholder="Photo URL"
                  {...register("photo", { required: true })}
                />
                <p className="text-xs text-red-500 font-inter">
                  {errors.photo && <span>This field is required</span>}
                </p>
              </div>
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
                <label
                  htmlFor="password"
                  className="text-title text-lg inline-block font-dm-sans font-normal"
                >
                  Password
                </label>
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
                <span>Register</span>
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

export default Register;
