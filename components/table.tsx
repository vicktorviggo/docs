import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './table.module.css'

interface DialogTabProps {
    head: any,
    rows: any
}
  

const DataTable: React.FC<DialogTabProps> = ({
    head,
    rows
}) => {
  return (
    <TableContainer component={Paper} classes={styles} sx={{borderRadius: "5px 5px 0px 0px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map((row) => (
                <TableCell 
                variant="head" 
                align={row.align}
                size= "small"
                sx={{backgroundColor: "#0d0d0d", color: "#fafbfc",}}
                >{row.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#1f1f1f", color: "#cacccf"}}
            >
              <TableCell sx={{color: "#fafbfc"}}>
                {row.Number}
              </TableCell>
              <TableCell variant="body" size= "small"align="right" sx={{ color: "#fafbfc"} }>{row.DLC}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;