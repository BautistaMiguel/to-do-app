import "./App.css";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider as ThemeMuiProvider } from "@material-ui/core/styles";
import { themeContext } from "./contexts/themes";
import Layout from "./components/common/Layout";

const App = () => {
  const { getTheme } = useContext(themeContext);

  return (
    <ThemeMuiProvider theme={getTheme()}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ThemeMuiProvider>
  );
};

export default App;
