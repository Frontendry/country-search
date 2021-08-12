// External Imports
import React from "react";
import { AppBar, Toolbar, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Local Imports
import styles from "../../assets/jss/components/page-sections/headerStyle.js";
import SearchCountriesField from "../page-elements/SearchCountriesField";
import Title from "../page-elements/Title";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Title />
            </Grid>
            <Grid item>
              <SearchCountriesField />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
