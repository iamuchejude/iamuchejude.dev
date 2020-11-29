import link from "@frontity/html2react/processors/link";
import Theme from "./components/theme";

const website = {
  name: "@iamuchejude/theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      name: "Jude",
    },
  },
  actions: {},
  libraries: {
    html2react: {
      processors: [link],
    },
  },
};

export default website;
