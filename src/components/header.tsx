import { Menu } from "antd";
import { HeartFilled, MessageFilled, HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{
        display: "flex",
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Menu.Item
        key="1"
        onClick={() => navigate("/")}
        icon={
          <HomeFilled
            style={{
              paddingInline: 10,
              fontSize: 20,
            }}
          />
        }
      />
      <Menu.Item
        key="2"
        style={{ marginLeft: "auto" }}
        onClick={() => navigate("/favourites")}
        icon={
          <HeartFilled
            style={{ color: "red", paddingInline: 10, fontSize: 20 }}
          />
        }
      />
      <Menu.Item
        key="3"
        style={{ alignSelf: "flex-end" }}
        onClick={() => {}}
        icon={
          <MessageFilled
            style={{ color: "teal", paddingInline: 10, fontSize: 20 }}
          />
        }
      />
    </Menu>
  );
};

export default Header;
