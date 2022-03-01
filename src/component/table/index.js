import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";
const TableData = ({ tableHeader, tableData }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            {tableHeader.map((data, idx) => (
              <TableCell key={data.id}>{data.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(
            (
              { plan, completed, remains, confidence, revise, questions },
              idx
            ) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{plan}</TableCell>
                <TableCell>{completed}</TableCell>
                <TableCell>{remains}</TableCell>
                <TableCell>{confidence}</TableCell>
                <TableCell>{revise}</TableCell>
                <TableCell>{questions}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
