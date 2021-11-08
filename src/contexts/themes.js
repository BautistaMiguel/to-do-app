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
          console.log(mode);
        },
      }}
    >
      {children}
    </Provider>
  );
};
