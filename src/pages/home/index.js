import TableData from "../../component/table";
import { tableHeader } from "../../config";
const Home = () => {
  const tableData = [
    {
      plan: "gate",
      completed: 45,
      remains: 35,
      questions: 4,
      confidence: 5,
      revise: 5,
    },
    {
      plan: "gate",
      completed: 45,
      remains: 35,
      questions: 4,
      confidence: 5,
      revise: 5,
    },
    {
      plan: "gate",
      completed: 45,
      remains: 35,
      questions: 4,
      confidence: 5,
      revise: 5,
    },
    {
      plan: "gate",
      completed: 45,
      remains: 35,
      questions: 4,
      confidence: 5,
      revise: 5,
    },
  ];
  return (
    <div>
      <TableData tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default Home;
