import auth from "@/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
      set({ authUser: res.user });
      if (res.user) {
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
}));

export default useAuth;
