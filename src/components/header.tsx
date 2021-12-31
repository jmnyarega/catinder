import { Menu } from "antd";

const Header = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
      {new Array(3).fill(null).map((_, index) => {
        const key = index + 1;

        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
      })}
    </Menu>
  );
};

export default Header;
