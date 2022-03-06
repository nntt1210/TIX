import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TablePaginationArrows from "../TablePaginationArrows";
import useStyles from "./style";

const DataTable = ({ headers, rows, ...props }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const styles = useStyles(props);

  const renderHeaders = () => {
    return headers.map((header, index) => (
      <TableCell className={styles.darkCell} key={index}>
        {header}
      </TableCell>
    ));
  };

  const renderRows = () => {
    return (rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows
    ).map((row, index) => (
      <TableRow className={styles.row} key={index}>
        {Object.keys(row).map((key, i) => (
          <TableCell className={styles.cell} key={i}>
            {row[key]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer className={styles.root}>
      <Table>
        <TableHead>
          <TableRow>{renderHeaders()}</TableRow>
        </TableHead>
        <TableBody>{renderRows()}</TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              className={`${styles.footer} ${styles.darkCell}`}
              classes={{
                select: styles.select,
                selectIcon: styles.selectIcon,
              }}
              colSpan={8}
              labelRowsPerPage="Số hàng mỗi trang"
              rowsPerPageOptions={[10, 25, 100]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationArrows}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
