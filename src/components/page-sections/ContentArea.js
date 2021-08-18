// External Imports
import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Local Imports
import styles from "../../assets/jss/components/page-sections/contentAreaStyle";

// Content Area Title
import ContentAreaTitle from "../page-elements/ContentAreaTitle";

// Tabs Display
import TabsDisplay from "../page-elements/TabsDisplay";

const useStyles = makeStyles(styles);

const ContentArea = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item sm={8}>
            <ContentAreaTitle />
            <TabsDisplay />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContentArea;
