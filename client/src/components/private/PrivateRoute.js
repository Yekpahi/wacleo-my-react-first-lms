import { Route } from "react-router-dom";

const PrivateRoute = ({props, component: Component, ...rest }) => {

  return (

    <div>

   
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          setTimeout(() => {
            props.history.push('/')
        }, 5000)
        )
      }
    />
    Redirection sur la page d'accueil dans 5s
     </div>
  );
};

export default PrivateRoute;
