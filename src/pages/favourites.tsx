// third party libs
import { List, Avatar, Button, Card } from "antd";
import { HeartFilled } from "@ant-design/icons";

// hooks
import { useVote } from "../hooks/vote";
import { theme } from "../constants/colors";
import React from "react";

/* @TODO
 *  - Add tests for every component
 *  - Refactor....
 *
 *  - Loader
 *  - responsivenss
 *
 *  - Document
 */

const Favourites: React.FC = () => {
  const { cats, isLoading, deleteVote } = useVote();

  const removeFavouriteHandler = (voteId: any, imageId: string) => {
    deleteVote(voteId, imageId);
  };

  return (
    <div style={styles.container}>
      <Card
        loading={isLoading}
        style={styles.card}
        title={
          <p>
            <HeartFilled style={styles.like} />
            Your Favourite Cats
            <HeartFilled style={styles.like} />
          </p>
        }
      >
        <List
          dataSource={cats}
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
                    style={styles.avatar}
                  />
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
  },
  card: {
    minWidth: 400,
  },
  like: {
    color: theme.colors.primary,
    paddingInline: 10,
    fontSize: 30,
  },
  avatar: {
    objectPosition: "center",
  },
};

export default Favourites;
