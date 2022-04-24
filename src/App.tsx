import { Home } from "pages/Home";
import GlobalStyle from "styles/global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "pages/Login";
import { PrivateRoute } from "modules/auth";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
