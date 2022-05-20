import React, { useState, useEffect, createContext } from "react";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuthStateChanged;
  }, [user]);

  const handleLogin = (values) => {
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorState(error.message)
    );
  };

  const handleSignup = (values) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorState(error.message)
    );
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user,
        isLoading,
        errorState,
        handleLogin,
        handleSignup,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
