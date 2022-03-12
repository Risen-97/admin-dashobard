import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import adminContext from "../../context/use-context";
const data = [
  {
    name: "Jun",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Apr",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sep",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Dec",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const Chart = () => {
  const [value] = useContext(adminContext);

  const renderLineChart = (
    <LineChart width={700} height={300} data={data}>
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#34d399" />
      <XAxis dataKey="name" stroke={value.isDark ? "#ffff" : "#333"} />
      <YAxis stroke={value.isDark ? "#ffff" : "#333"} />
      <CartesianGrid strokeDasharray="3 3" />
    </LineChart>
  );
  return <div className="chart shadow">{renderLineChart}</div>;
};

export default Chart;
