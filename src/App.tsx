import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import Fornitori from "./pages/Fornitori";
import Catasto from "./pages/Catasto";
import Province from "./pages/Province";
import Comuni from "./pages/Comuni";
import Utenti from "./pages/Utenti";
import Widget from "./pages/Widget";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Navigate to="/widget" replace />} />
          <Route path="fornitori" element={<Fornitori />} />
          <Route path="catasto" element={<Catasto />} />
          <Route path="province" element={<Province />} />
          <Route path="comuni" element={<Comuni />} />
          <Route path="utenti" element={<Utenti />} />
          <Route path="widget" element={<Widget />} />
        </Route>
      </Routes>
  );
}

export default App;
