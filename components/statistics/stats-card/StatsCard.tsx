import Image from "next/image";

import Card from "react-bootstrap/Card";

import statsCardStyles from "./StatsCard.module.scss";

type StatsProp = {
  stats: { title: string; description: string; image: string };
};

const StatsCard = ({ stats }: StatsProp) => {
  return (
    <Card className={statsCardStyles.card}>
      <div className={statsCardStyles.iconbox}>
        <div className={statsCardStyles.iconcircle}>
          <Image src={stats.image} alt={stats.title} />
        </div>
      </div>
      <Card.Body>
        <Card.Title className={statsCardStyles.title}>{stats.title}</Card.Title>
        <Card.Text className={statsCardStyles.text}>
          {stats.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
