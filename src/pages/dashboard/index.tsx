import { FC } from "react";
import SideNav from "../../components/navbar/sidenav";
import TopNav from "../../components/navbar/topnav";

interface DashBoardProps {}

const DashBoard: FC<DashBoardProps> = () => {
  return (
    <>
      <TopNav />
      <SideNav />
    </>
  );
};

export default DashBoard;
