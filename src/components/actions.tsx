import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";
import { theme } from "../constants/colors";

const actions = (handleSwipe: (value: number) => void) => [
  <CloseCircleFilled
    key="swipe-left"
    onClick={() => handleSwipe(0)}
    style={styles.swipeLeftButton}
  />,
  <CheckCircleFilled
    key="swipe-right"
    onClick={() => handleSwipe(1)}
    style={styles.swipeRightButton}
  />,
];

const styles = {
  swipeLeftButton: {
    color: theme.colors.primary,
    fontSize: 35,
  },
  swipeRightButton: {
    color: theme.colors.accent,
    fontSize: 35,
  },
};

export default actions;
