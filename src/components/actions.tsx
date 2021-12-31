import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

const actions = (handleSwipe: (value: number) => void) => [
  <CloseCircleFilled
    key="swipe-left"
    onClick={() => handleSwipe(0)}
    style={{ color: "red", fontSize: 35 }}
  />,
  <CheckCircleFilled
    key="swipe-right"
    onClick={() => handleSwipe(1)}
    style={{ color: "green", fontSize: 35 }}
  />,
];

export default actions;
