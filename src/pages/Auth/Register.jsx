import authImg from "@/assets/images/auth/auth-img.svg";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import SocalLogin from "@/components/auth/SocalLogin";
import useAuth from "@/hook/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "@/firebase/firebase.config";
import axiosPublic from "@/utils/axiosPublic";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import useCountry from "@/hook/useCountry";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const country = useCountry();
  const { createUser } = useAuth();

  console.log(country);

  const onSubmit = async (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    const role = data.role;

    createUser(email, password)
      .then((res) => {
        if (res.user) {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              const userInfo = {
                name: res.user.displayName,
                email: res.user.email,
                photo: res.user.photoURL,
                role,
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
                });
            })
            .catch((err) => {
              console.error(`Error in update user: ${err}`);
            });
        }
      })
      .catch((err) => {
        toast.error("User registration failed");
        console.error(`Error in create user: ${err}`);
      });
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

              <div className="space-y-1">
                <Controller
                  name="role"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Role is required" }}
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      aria-label="Select your option"
                    >
                      <div className="flex items-center gap-4">
                        <label className="text-title text-lg inline-block font-dm-sans font-bold">
                          Your Type:
                        </label>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="worker" id="worker" />
                          <Label
                            className="text-title text-lg inline-block font-dm-sans font-normal "
                            htmlFor="worker"
                          >
                            Worker
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="employer" id="employer" />
                          <Label
                            className="text-title text-lg inline-block font-dm-sans font-normal"
                            htmlFor="employer"
                          >
                            Employer
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  )}
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
