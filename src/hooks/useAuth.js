import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

export const useAuth = () => {
  const {
    isSignedIn,
    loading,
    signIn,
    signOut,
    userData
  } = useContext(AuthContext);

  return {
    isSignedIn,
    loading,
    signIn,
    signOut,
    userData
  }
};
