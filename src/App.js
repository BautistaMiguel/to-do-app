import "./App.css";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider as ThemeMuiProvider } from "@material-ui/core/styles";
import { themeContext } from "./contexts/themes";
import Layout from "./components/common/Layout";
import Trash from "./pages/Trash";
import Archive from "./pages/Archive";

export const routePaths = {
  home: "/",
  trash: "/trash",
  archive: "/archive",
};

const routes = [
  { route: routePaths.home, component: <Home /> },
  { route: routePaths.trash, component: <Trash /> },
  { route: routePaths.archive, component: <Archive /> },
];

const App = () => {
  const { getTheme } = useContext(themeContext);

  return (
    <ThemeMuiProvider theme={getTheme()}>
      <Router>
        <Layout>
          <Switch>
            {routes.map(({ route, component }) => (
              <Route exact key={route} path={route}>
                {component}
              </Route>
            ))}
          </Switch>
        </Layout>
      </Router>
    </ThemeMuiProvider>
  );
};

export default App;
