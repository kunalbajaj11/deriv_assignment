import { Line, LineChart, Tooltip, XAxis } from "recharts";

const data = [
    {name: "H1", price: 15},
    {name: "H2", price: 12},
    {name: "H3", price: 18},
    {name: "H4", price: 17},
    {name: "H5", price: 9},
    {name: "H6", price: 18},
    {name: "H7", price: 23},
    {name: "H8", price: 16},
];

function Chart() {
  return (
    <LineChart width={240} height={80} data={data}>
        <Line type="monotone" dataKey="price" stroke="#6c757d" strokeWidth={3} />
        <XAxis dataKey="name" />
        <Tooltip />
    </LineChart>
  )
}

export default Chart