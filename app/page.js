"use client";

import LoginPage from "./auth/login/page";
import Loader from "./common/loader";
import DashboardPage from "./dashboard/page";
import { useRouter } from "next/navigation";
import Main from "./homePage";
import HomePage from "./homePage";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <HomePage />
    </div>
  );
  // if (typeof window !== "undefined") {
  //   return <LoginPage/>
  // } else {
  //   return <Loader />;
  // }
};

export default Home;
