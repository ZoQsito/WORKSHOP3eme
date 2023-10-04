import React, { useEffect, useState } from "react";

authAPI.setup();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated()
  );

  const NavbarWithRouter = withRouter(Navbar);

  return (
    <HashRouter>
      <NavbarWithRouter />
      <main className="container pt-5">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/ResultAnnonce" component={ResultAnnounce} />
        </Switch>
      </main>
    </HashRouter>
  );
};

export default App;
