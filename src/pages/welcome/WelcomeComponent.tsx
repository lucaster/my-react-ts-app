import { Route, useHistory, useRouteMatch } from "react-router-dom";

const WelcomeComponent = () => {
  const routeMatch = useRouteMatch();
  const history = useHistory();
  const goToProducts = () => {
    history.push('/products');
  };
  return (
    <section>
      <h1>The Welcome Page</h1>
      <nav>
        <button onClick={goToProducts}>Go to products</button> <br />
      </nav>
      <p>{JSON.stringify(routeMatch)}</p>
      <Route path={`${routeMatch.path}/new-user`}>
        <p>Welcome new user!</p>
      </Route>
    </section>
  );
};

export default WelcomeComponent;
