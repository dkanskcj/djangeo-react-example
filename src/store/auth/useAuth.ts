import AuthInfo from "@models/auth/AuthInfo";
import create from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  
  login: (authInfo: AuthInfo) => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set, get) => {
  return {
    isAuthenticated: false, // 웹스토리지나 서버에서 인증 여부 가져와서 초깃값 담아도 됨.

    login: (authInfo) => {
      const isAuthenticated = true; // Pass
      set({ isAuthenticated });
    },

    logout: () => {
      set({isAuthenticated: false});
    }
  }
})

export default useAuth;