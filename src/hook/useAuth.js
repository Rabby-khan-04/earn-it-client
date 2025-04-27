import auth from "@/firebase/firebase.config";
import axiosPublic from "@/utils/axiosPublic";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import { create } from "zustand";

const useAuth = create((set) => ({
  authUser: null,
  isAuthLoading: true,

  initializeAuthUser: () => {
    set({ isAuthLoading: true });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ authUser: user });
        set({ isAuthLoading: false });

        axiosPublic
          .post("/auth/jwt", { email: user?.email })
          .then((res) => {
            if (res?.data?.data?.token) {
              localStorage.setItem("access-token", res.data.data.token);
            }
          })
          .catch((err) => {
            console.log(`Error in issuing JWT: ${err}`);
          });
      } else {
        set({ authUser: null });
        set({ isAuthLoading: false });
      }
    });

    return unsubscribe;
  },

  createUser: (email, password) => {
    set({ isAuthLoading: true });
    return createUserWithEmailAndPassword(auth, email, password);
  },

  signInUser: (email, password) => {
    set({ isAuthLoading: true });

    return signInWithEmailAndPassword(auth, email, password);
  },

  loginWithGoogle: () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  },

  singoutUser: () => {
    signOut(auth)
      .then(() => {
        axiosPublic
          .post("/auth/logout")
          .then(() => {
            localStorage.removeItem("access-token");
            toast.success("User logged out!!");
          })
          .catch((err) => {
            console.log(`Error in singout: ${err}`);
          });
      })
      .catch((err) => {
        toast.error("Something went wrong!!");
        console.log(`Error In Signout: ${err}`);
      });
  },
}));

export default useAuth;
