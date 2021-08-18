// External Import
import React from "react";
import PropTypes from "prop-types";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableHeadDisplay = (props) => {
  const { headData, classes, order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headData.map((dataColumn) => {
          return (
            <StyledTableCell
              key={dataColumn.field}
              sortDirection={orderBy === dataColumn.field ? order : false}
            >
              <TableSortLabel
                active={orderBy === dataColumn.field}
                direction={orderBy === dataColumn.field ? order : "asc"}
                onClick={createSortHandler(dataColumn.field)}
              >
                {dataColumn.headerName}
                {orderBy === dataColumn.field ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

TableHeadDisplay.propTypes = {
  headData: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default TableHeadDisplay;
