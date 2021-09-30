import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import NotFound from "../private/NotFound";
import ForgotPass from "./auth/ForgotPassword";
import ResetPass from "./auth/ResetPassword";
import EditUser from "./profile/EditUser";
import { useSelector } from "react-redux";
import Accueil from "../accueil/Accueil";
import PageDuCours from "../pagecours/PageDuCours";
import Formation from "../formations/Formation";
import Contact from "../contact/Contact";
import Profil from "./profile/Profile";
import PrivateScreen from "./auth/PrivateScreen";
// Routing
import PrivateRoute from "../private/PrivateRoute";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Accueil} />

        <Route path="/login" component={isLogged ? NotFound : Login} exact />
        <Route
          path="/register"
          component={isLogged ? NotFound : Register}
          exact
        />

        <Route
          path="/forgot_password"
          component={isLogged ? NotFound : ForgotPass}
          exact
        />
        <Route
          path="/user/reset/:token"
          component={isLogged ? NotFound : ResetPass}
          exact
        />

        <Route
          path="/user/activate/:activation_token"
          component={ActivationEmail}
          exact
        />

        <Route
          path="/profil"
          component={isLogged ? Profil : NotFound}
          exact
        />
        <Route
          path="/edit_user/:id"
          component={isAdmin ? EditUser : NotFound}
          exact
        />
        
        <Route
          path="/page-du-cours"
          component={isLogged ? PageDuCours : NotFound}
          exact
        />


        <Route path="/formations" exact component={Formation} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/formation/:slug" exact component={Formation} />
        <Route
          path="/"
          component={() => <div>Erreur 404, ce url n'existe pas...</div>}
        />
          <PrivateRoute exact path="/" component={PrivateScreen} />
      </Switch>
    </section>
  );
}

export default Body;
