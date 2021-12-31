import React from "react";

// third party libs
import { Card } from "antd";

// components
import CoverImage from "../components/coverImage";
import actions from "../components/actions";

// hooks
import { useGetRandomCats } from "../hooks/getRandomCats";

// services
import { likeCat, dislikeCat } from "../services/catsApi";

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
        loading={isLoading}
        hoverable
        cover={
          <CoverImage
            url={cat?.url}
            styles={{ width: 400, height: 400, objectFit: "cover" }}
          />
        }
        actions={actions(handleSwipeRight, handleSwipeLeft)}
      >
        <Card.Meta title="Let's hangout!" />
      </Card>
    </div>
  );
};

export default Swipe;
