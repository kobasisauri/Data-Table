import { Card } from "antd";
import { useCountHandler } from "../hooks/cities";
import { Chart } from "../components";

function PageChart() {
  const cities = useCountHandler();

  return (
    <Card>
      <Chart cities={cities} />
    </Card>
  );
}

export default PageChart;
