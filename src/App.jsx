import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Use Link here
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashBoard from "./Components/DashBoard";
import Datas from "./Components/Datas";
import Subcription from "./Components/Subcription";
import Team from "./Components/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navbar (Now Global) */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Admin Page</Navbar.Brand> {/* Use Link for navigation */}
          <Nav className="m-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link for navigation */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/datas">Datas</Nav.Link> {/* Use Link for navigation */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Subcription">Subcription</Nav.Link> {/* Use Link for navigation */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Team">Team</Nav.Link> {/* Use Link for navigation */}
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/datas" element={<Datas />} />
        <Route path="/Subcription" element={<Subcription />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
