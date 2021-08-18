import React from "react";
import PropTypes from "prop-types";
import { TableBody, TableRow, TableCell } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TableBodyDisplay = (props) => {
  const { bodyData, classes, stableSort, getComparator, order, orderBy } =
    props;
  return (
    <TableBody>
      {stableSort(bodyData, getComparator(order, orderBy)).map(
        (bodyDataRow, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <StyledTableRow key={bodyDataRow.name} tabIndex={-1}>
              <StyledTableCell component="th" scope="row" id={labelId}>
                <img
                  className={classes.flagIcon}
                  src={bodyDataRow.flag}
                  alt={bodyDataRow.name}
                />
              </StyledTableCell>
              <StyledTableCell>{bodyDataRow.name}</StyledTableCell>
              <StyledTableCell>{bodyDataRow.population}</StyledTableCell>
              <StyledTableCell>{bodyDataRow.region}</StyledTableCell>
            </StyledTableRow>
          );
        }
      )}
    </TableBody>
  );
};

TableBodyDisplay.propTypes = {
  bodyData: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  stableSort: PropTypes.func.isRequired,
  getComparator: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default TableBodyDisplay;
