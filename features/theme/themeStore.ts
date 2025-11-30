import { create } from "zustand";

export type UserTheme = "light" | "dark";

interface ThemeState {
  theme: UserTheme;
  chooseTheme: (newTheme: UserTheme) => void;
}

/**
 * Zustand store to manage user theme preferences.
 */
export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light", // default, will be updated in Client Component
  chooseTheme: (newTheme) => set({ theme: newTheme }),
}));
