import { createTheme as createMuiTheme } from "@material-ui/core/styles";
import { createContext, useState } from "react";

export const themeContext = createContext({
  toggleTheme: () => {},
  getTheme: () => {},
});

const createTheme = (type) =>
  createMuiTheme({
    palette: {
      type,
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: type === "light" ? "gray" : "#0d56d2",
        },
      },
    },
  });

export const ThemeProvider = ({ children }) => {
  const { Provider } = themeContext;
  const [mode, setMode] = useState("light");

  return (
    <Provider
      value={{
        getTheme: () => createTheme(mode),
        toggleTheme: () => {
          setMode(mode === "light" ? "dark" : "light");
        },
      }}
    >
      {children}
    </Provider>
  );
};
