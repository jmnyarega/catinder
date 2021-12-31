// third party libs
import { List, Avatar, Button, Card } from "antd";
import { HeartFilled } from "@ant-design/icons";

// hooks
import { useVote } from "../hooks/vote";

/* @TODO
 *  - navbar
 *  - Homepage
 *  - styles
 *
 *  - Add tests for every component
 *  - Refactor....
 *
 *  - Loader
 *  - responsivenss
 *
 *  - Document
 */

const Favourites: React.FC = () => {
  const [cats, isLoading, , deleteVote] = useVote();

  const removeFavouriteHandler = (voteId: any, imageId: string) => {
    deleteVote(voteId, imageId);
  };

  return (
    <Card
      loading={isLoading}
      style={{ minWidth: 400 }}
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
