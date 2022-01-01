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
      <Menu.Item
        key="1"
        onClick={() => navigate("/")}
        icon={<HomeFilled style={styles.homeMenuIcon} />}
      />
      <Menu.Item
        key="2"
        style={{ marginLeft: "auto" }}
        onClick={() => navigate("/favourites")}
        icon={<HeartFilled style={styles.favouritesMenuIcon} />}
      />
      <Menu.Item
        key="3"
        style={{ alignSelf: "flex-end" }}
        onClick={() => {}}
        icon={<MessageFilled style={styles.messagesMenuIcon} />}
      />
    </Menu>
  );
};

const styles: IStyles = {
  container: {
    display: "flex",
    position: "fixed",
    zIndex: 1,
    width: "100%",
  },
  homeMenuIcon: {
    paddingInline: 10,
    fontSize: 20,
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
};

export default Header;
