import useAuth from "@/hook/useAuth";
import profileBg from "@/assets/images/bg/profile-bg.jpg";
import profileImg from "@/assets/images/user/profile.svg";
import verifiedIco from "@/assets/icons/check.png";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Profile = () => {
  const { userInfo, authUser } = useAuth();

  console.log({ userInfo, authUser });

  return (
    <>
      <section>
        <div
          className="bg-center bg-no-repeat bg-cover min-h-80 flex items-center justify-center"
          style={{ backgroundImage: `url(${profileBg})` }}
        >
          <div className="text-center space-y-4">
            <img
              src={authUser.photoURL || profileImg}
              className="size-24 rounded-full object-cover object-center inline-block"
              alt=""
            />
            <div className="flex items-center justify-center gap-3">
              <h3 className="font-inter text-xl font-semibold text-white">
                {userInfo.name}
              </h3>
              <img src={verifiedIco} className="size-4" alt="" />
            </div>
            <div className="text-sm font-inter text-white/50 flex items-center justify-center gap-3">
              <p>{userInfo.role}</p>
              <p>{userInfo.country}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="container border-2 border-secondary rounded-xl">
          <div className="py-6 px-10 grid grid-cols-4 gap-4">
            <div className="text-center space-y-1">
              <h3 className="text-title text-2xl font-dm-sans font-bold">
                0.00% (0 of 0)
              </h3>
              <p className="text-sm font-inter text-text ">Satisfied Rate</p>
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-title text-2xl font-dm-sans font-bold">0</h3>
              <p className="text-sm font-inter text-text ">Completed Tasks</p>
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-title text-2xl font-dm-sans font-bold">0%</h3>
              <p className="text-sm font-inter text-text ">Completion Rate</p>
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-title text-2xl font-dm-sans font-bold">
                0.00%
              </h3>
              <p className="text-sm font-inter text-text ">Worker Score</p>
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-3 gap-5">
          <div className="border-2 border-secondary rounded-xl">
            <div className="py-3 px-7 border-b-2 border-secondary">
              <h2 className="font-inter text-base text-title font-bold mb-4">
                Infos
              </h2>
            </div>
            <div className="py-5 px-7 space-y-5">
              <div className="flex items-center gap-10">
                <p className="text-sm font-inter text-text basis-1/2">
                  Member since
                </p>
                <p className="text-sm font-inter text-title basis-1/2 font-bold">
                  {new Date(Number(userInfo.member_since)).toLocaleDateString(
                    "en-us",
                    {}
                  )}
                </p>
              </div>

              <div className="flex items-center gap-10">
                <p className="text-sm font-inter text-text basis-1/2">
                  Country
                </p>
                <p className="text-sm font-inter text-title basis-1/2 font-bold">
                  {userInfo.country}
                </p>
              </div>

              <div className="flex items-center gap-10">
                <p className="text-sm font-inter text-text basis-1/2">
                  Balance
                </p>
                <p className="text-sm font-inter text-title basis-1/2 font-bold">
                  ${userInfo.balance}
                </p>
              </div>

              <div className="flex items-center gap-10">
                <p className="text-sm font-inter text-text basis-1/2">
                  Worker Score
                </p>
                <p className="text-sm font-inter text-title basis-1/2 font-bold">
                  {userInfo.work_score}%
                </p>
              </div>

              <div className="flex items-center gap-10">
                <p className="text-sm font-inter text-text basis-1/2">
                  AVG Online Hours
                </p>
                <p className="text-sm font-inter text-title basis-1/2 font-bold">
                  {userInfo.avgOnlineHours} hours
                </p>
              </div>

              <div className="flex items-center gap-10">
                <p className="text-sm font-inter text-text basis-1/2">
                  Completed Tasks
                </p>
                <p className="text-sm font-inter text-title basis-1/2 font-bold">
                  {userInfo.completed_tasks}
                </p>
              </div>

              <div className="flex items-center gap-10">
                <p className="text-sm font-inter text-text basis-1/2">Earned</p>
                <p className="text-sm font-inter text-title basis-1/2 font-bold">
                  ${userInfo.earned}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border-2 border-secondary rounded-xl">
            <div className="py-3 px-7 border-b-2 border-secondary">
              <h2 className="font-inter text-base text-title font-bold mb-4">
                Latest Submitted Tasks
              </h2>
            </div>

            <div className="py-5 px-7">
              <Table>
                <TableHeader className="text-base font-inter text-title">
                  <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Page Views</TableHead>
                  </TableRow>
                </TableHeader>
                {/* <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody> */}
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
