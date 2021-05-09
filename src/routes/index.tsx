import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Navigator from "../navigator";
import Home from "../pages/home";
import EssentialGit from "../pages/posts/essential-git";
import About from "./../pages/about/index";
import Contact from "./../pages/contact/index";

interface IProps {
  component: React.ComponentType<any>;
  path: string;
}

const MyRoute = ({ path, component: Component, ...rest }: IProps) => (
  <Route
    {...rest}
    render={(props) => (
      <div>
        <Navigator></Navigator>
        <Header></Header>
        <div>
          <Component path={path} {...props} />
        </div>
        <Footer></Footer>
      </div>
    )}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <MyRoute path="/about" component={About} />
      <MyRoute path="/contact" component={Contact} />
      <MyRoute path="/essencial-git" component={EssentialGit} />
      <MyRoute path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
