import auth from "@/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
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
      } else {
        set({ authUser: null });
        set({ isAuthLoading: false });
      }
    });

    return unsubscribe;
  },

  createUser: async (displayName, photoURL, email, password) => {
    set({ isAuthLoading: true });
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        set({ authUser: res.user });
        updateProfile(auth.currentUser, { displayName, photoURL })
          .then(() => {
            toast.success("User registered successfully!!");
          })
          .catch((err) => {
            console.error(`Error in update user: ${err}`);
          });
      }
    } catch (error) {
      toast.error("User registration failed");
      console.error(`Error in create user: ${error}`);
      set({ authUser: null });
      set({ isAuthLoading: false });
    }
  },

  signInUser: async (email, password) => {
    set({ isAuthLoading: true });
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        set({ authUser: res.user, isAuthLoading: false });
        toast.success("User loggen in successfully");
      }
    } catch (error) {
      toast.error("User login failed");
      console.error(`Error in create user: ${error}`);
      set({ authUser: null, isAuthLoading: false });
    }
  },
}));

export default useAuth;
