import React from "react";
import { useGetFavouriteCats } from "../hooks/getFavouriteCats";
import { List, Avatar, Button, Card } from "antd";
import { HeartFilled } from "@ant-design/icons";

/* @TODO
 *  - Add routes
 *  - Favoutes
 *  - Delete votes
 *
 *  - namings of functions
 *  - refactor
 *
 *  - Add tests for every component
 *  - Refactor....
 *
 *  - Loader
 *
 *  - Document
 */

const Favourites: React.FC = () => {
  const [favouriteCats, isLoading, , removeFavourite] = useGetFavouriteCats();

  const removeFavouriteHandler = (voteId: any, imageId: string) => {
    removeFavourite(voteId, imageId);
  };

  return (
    <Card
      loading={isLoading}
      style={{ minWidth: "500px" }}
      title={
        <p>
          <HeartFilled
            style={{ color: "red", paddingInline: 10, fontSize: 30 }}
          />
          Your Favourite Cats
          <HeartFilled
            style={{ color: "red", paddingInline: 10, fontSize: 30 }}
          />
        </p>
      }
    >
      <List
        dataSource={favouriteCats}
        renderItem={(cat) => (
          <List.Item
            actions={[
              <Button
                onClick={() => removeFavouriteHandler(cat.id, cat.image_id)}
                type="primary"
                danger
              >
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={cat.url}
                  alt={cat.url}
                  size={100}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Favourites;
