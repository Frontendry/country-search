import { styleDefaults } from "../../theme";

const appStyle = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
  toolbar: {
    minHeight: styleDefaults.topSpacing,
  },
});

export default appStyle;
