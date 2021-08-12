import { styleDefaults } from "../../theme";

const appStyle = (theme) => ({
  root: {
    marginTop: styleDefaults.topSpacing,
    backgroundColor: theme.palette.grey[100],
  },
});

export default appStyle;
