// src/pages/_app.tsx
import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import { useRouter } from "next/router";
import "../globals.css";
import Head from "next/head";

const authPages = ["/dashboard", "/profile"]; // Example authenticated routes

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  //   const { isAuthenticated } = useAuth();
  //   const router = useRouter();

  //   // Redirect to login if trying to access an auth page while not authenticated
  //   React.useEffect(() => {
  //     if (!isAuthenticated && authPages.includes(router.pathname)) {
  //       router.push("/auth/login");
  //     }
  //   }, [isAuthenticated, router.pathname]);

  return <>{children}</>;
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <ThemeProvider theme={lightTheme}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </ThemeProvider>
  </AuthProvider>
);

export default MyApp;
