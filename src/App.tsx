import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
