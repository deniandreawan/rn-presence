import React from "react";
import { AuthProvider } from "./AuthProvider";

export const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
