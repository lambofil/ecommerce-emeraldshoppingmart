"use client";

import { SessionProvider } from "next-auth/react";
import ReduxPersistWrapper from "./ReduxPersistWrapper";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxPersistWrapper>
      <SessionProvider>{children}</SessionProvider>
    </ReduxPersistWrapper>
  );
};



export default Layout;





