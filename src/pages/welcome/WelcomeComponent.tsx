import { Route, useLocation } from "react-router-dom";

const WelcomeComponent = () => {
  const loc = useLocation<string>();
  return (
    <section>
      <h1>The Welcome Page</h1>
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
