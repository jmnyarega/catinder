// third party
import { Menu } from "antd";
import { HeartFilled, MessageFilled, HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// types
import { IStyles } from "../types/cat.types";
import { theme } from "../constants/colors";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={styles.container}
    >
      <Menu.Item key="1" onClick={() => navigate("/")}>
        <HomeFilled style={styles.homeMenuIcon} />
        <span style={styles.logo}>Catinder</span>
      </Menu.Item>
      <Menu.Item
        key="2"
        style={{ marginLeft: "auto" }}
        onClick={() => navigate("/favourites")}
        icon={<HeartFilled style={styles.favouritesMenuIcon} />}
      />
      <Menu.Item
        key="3"
        disabled
        style={{ alignSelf: "flex-end" }}
        icon={<MessageFilled style={styles.messagesMenuIcon} />}
      />
    </Menu>
  );
};

const styles: IStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    zIndex: 1,
    width: "100%",
  },
  homeMenuIcon: {
    paddingInline: 10,
    fontSize: 20,
    color: theme.colors.primary,
  },
  favouritesMenuIcon: {
    color: theme.colors.primary,
    paddingInline: 10,
    fontSize: 20,
  },
  messagesMenuIcon: {
    color: theme.colors.accent,
    paddingInline: 10,
    fontSize: 20,
  },
  logo: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 25,
    color: theme.colors.primary,
  },
};

export default Header;
