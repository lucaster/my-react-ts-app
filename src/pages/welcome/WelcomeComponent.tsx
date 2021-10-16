import { Route, useHistory } from "react-router-dom";

const WelcomeComponent = () => {
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
      {/*
        bisogna x forza mettere full path, non è riusabile :/
        Workaround: https://stackoverflow.com/a/49321289
      */}
      <Route path="/welcome/new-user">
        <p>Welcome new user!</p>
      </Route>
    </section>
  );
};

export default WelcomeComponent;
