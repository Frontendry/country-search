// External Imports
import React from "react";
import { connect } from "react-redux";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  Paper,
} from "@material-ui/core";

// Local Imports
import styles from "../../assets/jss/components/page-elements/dataTableDisplayStyle";

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

const useStyles = makeStyles(styles);

export const DataTableDisplay = ({ countries }) => {
  const classes = useStyles();
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
        const columnsData = [
          {
            field: fields[0],
            headerName: prettifyText(fields[0]),
            width: 150,
          },
          {
            field: fields[1],
            headerName: prettifyText(fields[1]),
            width: 150,
          },
          {
            field: fields[2],
            headerName: prettifyText(fields[2]),
            width: 150,
          },
          {
            field: fields[3],
            headerName: prettifyText(fields[3]),
            width: 150,
          },
        ];

        return columnsData;
      };

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

        /*    const necessaryDataWithId = necessaryData.map((data, index) => {
          return { ...data, id: index + 1 };
        }); */

        return necessaryData;
      };

      return (
        <>
          <h2>Population Data</h2>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  {dataTableColumns().map((dataTableColumn) => {
                    return (
                      <StyledTableCell key={dataTableColumn.field}>
                        {dataTableColumn.headerName}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTableRows().map((dataTableRow) => {
                  return (
                    <StyledTableRow key={dataTableRow.name}>
                      <StyledTableCell component="th" scope="row">
                        <img
                          className={classes.flagIcon}
                          src={dataTableRow.flag}
                          alt={dataTableRow.name}
                        />
                      </StyledTableCell>
                      <StyledTableCell>{dataTableRow.name}</StyledTableCell>
                      <StyledTableCell>
                        {dataTableRow.population}
                      </StyledTableCell>
                      <StyledTableCell>{dataTableRow.region}</StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
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
