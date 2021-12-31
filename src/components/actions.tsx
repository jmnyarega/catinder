import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

const actions = (handleSwipeRight: () => void, handleSwipeLeft: () => void) => [
  <CloseCircleFilled
    key="swipe-left"
    onClick={handleSwipeLeft}
    style={{ color: "red", fontSize: 35 }}
  />,
  <CheckCircleFilled
    key="swipe-right"
    onClick={handleSwipeRight}
    style={{ color: "green", fontSize: 35 }}
  />,
];

export default actions;
