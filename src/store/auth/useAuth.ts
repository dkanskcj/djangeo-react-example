import AuthInfo from "@models/auth/AuthInfo";
import ContextCallbackOption from "@models/common/ContextCallbackOption";
import create from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  isAuthInfoConfirmed: boolean;
  isOTPConfirmed: boolean;
  
  confirmAuthInfo: (authInfo: AuthInfo, options?: ContextCallbackOption) => void;
  confirmOTP: (otp: string, options?: ContextCallbackOption) => void;
  
  login: (options?: ContextCallbackOption) => void;
  logout: (options?: ContextCallbackOption) => void;
}

const useAuth = create<AuthState>((set, get) => {
  return {
    isAuthenticated: false, // 웹스토리지나 서버에서 인증 여부 가져와서 초깃값 담아도 됨.
    isAuthInfoConfirmed: false,
    isOTPConfirmed: false,

    confirmAuthInfo: (authInfo, options) => {
      set({isAuthInfoConfirmed: true});
      options?.success && options.success();
    },

    confirmOTP: (otp, options) => {
      set({isOTPConfirmed: true});
      options?.success && options.success();
    },

    login: (options) => {
      set({ isAuthenticated: true });
      options?.success && options.success();
    },

    logout: (options) => {
      set({isAuthenticated: false});
      options?.success && options.success();
    }
  }
})

export default useAuth;