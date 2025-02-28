import auth from "@/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
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

  createUser: async (email, password) => {
    set({ isAuthLoading: true });
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      set({ authUser: res.user });
    } catch (error) {
      console.error(`Error in create user: ${error}`);
      set({ authUser: null });
      set({ isAuthLoading: false });
    }
  },
}));

export default useAuth;
