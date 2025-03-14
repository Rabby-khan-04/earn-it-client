import Dashboard from "@/layouts/Dashboard";
import Main from "@/layouts/Main";
import About from "@/pages/About/About";
import AddNewJob from "@/pages/AddNewJob/AddNewJob";
import Admin from "@/pages/Admin/Admin";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Checkout from "@/pages/Checkout/Checkout";
import Contact from "@/pages/Contact/Contact";
import Employer from "@/pages/Employer/Employer";
import Home from "@/pages/Home/Home";
import Jobs from "@/pages/Jobs/Jobs";
import ManageJobs from "@/pages/ManageJobs/ManageJobs";
import ManageUsers from "@/pages/ManageUsers/ManageUsers";
import MyJobs from "@/pages/MyJobs/MyJobs";
import PaymentHistory from "@/pages/PaymentHistory/PaymentHistory";
import PurcheaseCoin from "@/pages/PurcheaseCoin/PurcheaseCoin";
import SubmitedJobs from "@/pages/SubmitedJobs/SubmitedJobs";
import Worker from "@/pages/Worker/Worker";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "worker",
        element: <Worker />,
      },

      {
        path: "employer",
        element: <Employer />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "submited-jobs",
        element: <SubmitedJobs />,
      },
      {
        path: "add-new-job",
        element: <AddNewJob />,
      },
      {
        path: "my-jobs",
        element: <MyJobs />,
      },
      {
        path: "purchase-coin",
        element: <PurcheaseCoin />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "check-out",
        element: <Checkout />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-jobs",
        element: <ManageJobs />,
      },
    ],
  },
]);

export default router;
