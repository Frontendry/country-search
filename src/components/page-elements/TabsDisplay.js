// External Imports
import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Box } from "@material-ui/core";

// Local Imports
import styles from "../../assets/jss/components/page-elements/tabsDisplayStyle";
import antTabWithStyles from "../../assets/jss/components/page-elements/antTabWithStyle";
import antTabsWithStyles from "../../assets/jss/components/page-elements/antTabsWithStyle";

// Map Component
import Map from "./Map";

// Data Visualization Component
import ChartDisplay from "./ChartDisplay";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const AntTabs = withStyles(antTabsWithStyles)(Tabs);

const AntTab = withStyles(antTabWithStyles)((props) => (
  <Tab disableRipple {...props} />
));

const useStyles = makeStyles(styles);

const TabPanel = (props) => {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.tabPanel}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const TabsDisplay = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
        <AntTab label="Map" {...a11yProps(0)} />
        <AntTab label="Chart" {...a11yProps(1)} />
        <AntTab label="Data Table" {...a11yProps(2)} />
      </AntTabs>

      <TabPanel value={value} index={0}>
        <Map />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChartDisplay />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
};

export default TabsDisplay;
