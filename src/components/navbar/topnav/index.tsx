import { FC, useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

interface TopNavProps {}

const TopNav: FC<TopNavProps> = () => {
  const [current, setCurrent] = useState("logo");
  const handleClick = (e: any) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      className="w-screen flex"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="logo">S T O R I F Y</Menu.Item>
      <div className="flex w-full justify-end">
        <Menu.Item key="login">
          <Link to={"/login"}>Log in</Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link to={"/signup"}>Sign up</Link>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default TopNav;
