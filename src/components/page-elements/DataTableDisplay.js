// External Imports
import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { TableContainer, Table, Paper } from "@material-ui/core";

// Local Imports
import styles from "../../assets/jss/components/page-elements/dataTableDisplayStyle";

// Table Head
import TableHeadDisplay from "./TableHeadDisplay";

// Table Body
import TableBodyDisplay from "./TableBodyDisplay";

// Helper functions
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles(styles);

export const DataTableDisplay = ({ countries }) => {
  const classes = useStyles();

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const renderDataTable = () => {
    if (countries.length) {
      const fields = ["flag", "name", "population", "region"];

      const prettifyText = (str) => {
        let newStr;

        const spacedString = str.replace(/([A-Z])/g, " $1");

        newStr = spacedString.charAt(0).toUpperCase() + spacedString.slice(1);

        return newStr;
      };

      const dataTableColumns = () => {
        // Table Head Data
        const columnsData = [
          {
            field: fields[0],
            headerName: prettifyText(fields[0]),
          },
          {
            field: fields[1],
            headerName: prettifyText(fields[1]),
          },
          {
            field: fields[2],
            headerName: prettifyText(fields[2]),
          },
          {
            field: fields[3],
            headerName: prettifyText(fields[3]),
          },
        ];

        return columnsData;
      };

      // Table Body Data
      const dataTableRows = () => {
        const necessaryDataFilter = (arr, selection) => {
          const filteredArr = [];

          arr.forEach((obj) => {
            const filteredObj = {};
            for (let key in obj) {
              if (selection.includes(key)) {
                filteredObj[key] = obj[key];
              }
            }
            filteredArr.push(filteredObj);
          });
          return filteredArr;
        };

        const necessaryData = necessaryDataFilter(countries, fields);

        return necessaryData;
      };

      return (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHeadDisplay
                headData={dataTableColumns()}
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBodyDisplay
                bodyData={dataTableRows()}
                classes={classes}
                order={order}
                orderBy={orderBy}
                stableSort={stableSort}
                getComparator={getComparator}
              />
            </Table>
          </TableContainer>
        </>
      );
    } else {
      return <p>No data available</p>;
    }
  };

  return <div>{renderDataTable()}</div>;
};

const mapStateToProps = ({ searchedCountries }) => {
  return {
    countries: searchedCountries.countries,
  };
};

export default connect(mapStateToProps)(DataTableDisplay);
