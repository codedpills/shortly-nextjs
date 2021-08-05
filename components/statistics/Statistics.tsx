import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import StatsCard from "./stats-card/StatsCard";
import { statisticsData } from "./statistics.data";

import statisticsStyles from "./Statistics.module.scss";

const Statistics = () => {
  const statsList = statisticsData.map((stat, idx) => {
    return (
      <Col
        key={idx}
        xs={12}
        md={4}
        style={{ paddingTop: `${2.5 * idx}rem` }}
        className={statisticsStyles.col}
      >
        <StatsCard stats={stat} />
      </Col>
    );
  });

  return (
    <div className={statisticsStyles.root}>
      <Container>
        <div className={statisticsStyles.heading}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={statisticsStyles.linewrapper}>
          <div className={statisticsStyles.line}></div>
          <Row className={statisticsStyles.row}>{statsList}</Row>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
