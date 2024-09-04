import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import ContactDetails from "./components/ContactDetails";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/*" element={<Contacts />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
