import { Pie } from "@ant-design/plots";

function Chart({ cities }: { cities: { city: string; count: number }[] }) {
  const data = cities.map((item) => ({ type: item.city, value: item.count }));

  const config: any = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.5,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }: { percent: number }) =>
        `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },

    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return <Pie {...config} />;
}

export default Chart;
