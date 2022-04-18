import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "../../components/auth/login";
import Signup from "../../components/auth/signup";
import TopNav from "../../components/navbar/topnav";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-1/6">
        <TopNav />
      </div>
      <div className="w-full h-5/6 flex justify-center">
        {pathname.includes("/login") ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default HomePage;
