import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, props, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return rest.state.authenticated === true ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
}

export default PrivateRoute;
