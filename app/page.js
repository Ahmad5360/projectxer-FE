"use client";

import LoginPage from "./auth/login/page";
import Loader from "./common/loader";
import DashboardPage from "./dashboard/page";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return router.replace("/auth/login");
  // if (typeof window !== "undefined") {
  //   return <LoginPage/>
  // } else {
  //   return <Loader />;
  // }
};

export default Home;
