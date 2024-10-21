import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {},
  setUser: (user) => set({ user }),
  resetUser: () => set((state) => ({ user: {} })),
}));
export default useUserStore;
