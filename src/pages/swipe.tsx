// third party libs
import { Card } from "antd";

// components
import CoverImage from "../components/coverImage";
import actions from "../components/actions";

// hooks
import { useGetCats } from "../hooks/randomCats";

// services
import { vote } from "../services/catsApi";

const Swipe: React.FC = () => {
  const [cat, isLoading, getRandomCats] = useGetCats();

  const handleSwipe = (value: number) => {
    getRandomCats();
    vote(cat?.id, value, cat?.url);
  };

  return (
    <div style={styles.container}>
      <Card
        loading={isLoading}
        hoverable
        cover={<CoverImage url={cat?.url || ""} styles={styles.coverImage} />}
        actions={actions(handleSwipe)}
      >
        <Card.Meta title="Let's hangout!" />
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
  coverImage: {
    width: 400,
    height: 400,
    objectFit: "cover",
    objectPosition: "center",
  },
};

export default Swipe;
