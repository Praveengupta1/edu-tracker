import TableComponent from "../../component/table";
import { tableHeader } from "../../config";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Home = () => {
  const [open, setOpen] = useState(false);
  const [inputPlan, setInputPlan] = useState("");
  const [tableData, setTableData] = useState([
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
  ]);
  const handleClick = (e) => setOpen(true);
  const handleClosedModal = (e) => {
    if (inputPlan === "") {
      setOpen(false);
      return;
    }
    setOpen(false);
    const data = {
      plan: inputPlan,
      completed: 45,
      remains: 35,
      questions: 4,
      confidence: 5,
      revise: 5,
    };
    tableData.push(data);
    setTableData(tableData);
    setInputPlan("");
  };
  return (
    <div className="home">
      <Button variant="contained" onClick={handleClick}>
        add new plan
      </Button>
      <Modal open={open} onClose={handleClosedModal}>
        <Box sx={style}>
          <TextField
            type="text"
            label="Enter Your Plan"
            onChange={(e) => setInputPlan(e.target.value)}
            value={inputPlan}
          />
          <Button variant="contained" onClick={handleClosedModal}>
            Add
          </Button>
        </Box>
      </Modal>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default Home;
