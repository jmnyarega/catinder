import React from "react";

// third party libs
import { Card } from "antd";

// components
import CoverImage from "../components/coverImage";
import actions from "../components/actions";

// hooks
import { useGetRandomCats } from "../hooks/getRandomCats";

// services
import { vote } from "../services/catsApi";

const Swipe: React.FC = () => {
  const [cat, isLoading, getRandomCats] = useGetRandomCats();

  const handleSwipe = (value: number) => {
    getRandomCats();
    vote(cat?.id, value);
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
        actions={actions(handleSwipe)}
      >
        <Card.Meta title="Let's hangout!" />
      </Card>
    </div>
  );
};

export default Swipe;
