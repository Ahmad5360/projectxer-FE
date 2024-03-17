"use client";

import LoginPage from "./auth/login/page";
import Loader from "./common/loader";
import DashboardPage from "./dashboard/page";

const Home = () => {
  
return <LoginPage />
  // if (typeof window !== "undefined") {
  //   return <LoginPage/>
  // } else {
  //   return <Loader />;
  // }
};

export default Home;
