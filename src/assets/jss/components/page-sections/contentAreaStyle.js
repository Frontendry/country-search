import { styleDefaults } from "../../theme";

const appStyle = (theme) => ({
  root: {
    marginTop: styleDefaults.topSpacing + styleDefaults.sectionSpacing,
    backgroundColor: theme.palette.grey[100],
  },
});

export default appStyle;
