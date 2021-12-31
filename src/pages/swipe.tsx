import React from "react";

// third party libs
import { Card } from "antd";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

// hooks
import { useGetRandomCats } from "../hooks/getRandomCats";

// services
import { likeCat, dislikeCat } from "../services/catsApi";

const CoverImage: React.FC<{ url: string }> = ({ url }) => (
  <img
    alt={url}
    src={url}
    style={{ width: 400, height: 400, objectFit: "cover" }}
  />
);

const Swipe: React.FC = () => {
  const [cat, isLoading, getRandomCats] = useGetRandomCats();

  const handleSwipeLeft = () => {
    getRandomCats();
    likeCat(cat?.id);
  };

  const handleSwipeRight = () => {
    getRandomCats();
    dislikeCat(cat?.id);
  };

  return (
    <div>
      <Card
        size="small"
        hoverable
        cover={<CoverImage url={cat?.url} />}
        actions={[
          <CloseCircleFilled
            key="swipe-left"
            onClick={handleSwipeLeft}
            disabled={isLoading}
            style={{ color: "red", fontSize: 35 }}
          />,
          <CheckCircleFilled
            key="swipe-right"
            onClick={handleSwipeRight}
            style={{ color: "green", fontSize: 35 }}
          />,
        ]}
      >
        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default Swipe;
