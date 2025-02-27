import { create } from "zustand";

const useAuth = create((set) => ({
  authUser: null,
  isAuthLoading: true,

  checkAuth: async () => {
    set({ isAuthLoading: false });
    set({ authUser: { name: "rabby" } });
  },
}));

export default useAuth;
