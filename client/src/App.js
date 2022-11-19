import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patreg from "./components/Patreg";
import Patphnlogin from "./components/Patphnlogin";
import Patemaillogin from "./components/Patemaillogin";
import Docreg from "./components/Docreg";
import Doclogin from "./components/Doclogin";
import Docdetails from "./components/Docdetails";
import Patientdetails from "./components/Patientdetails";
import Addappoint from "./components/Addappoint";
import Approvedappointments from "./components/Approvedappointments";
import Cancelledappointments from "./components/Cancelledappointments";
import Pendingappointments from "./components/Pendingappointments";
import Home from "./components/Home";
import AddDiseases from "./components/AddDiseases";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="patreg" element={<Patreg />} />
          <Route path="patphnlogin" element={<Patphnlogin />} />
          <Route path="patemaillogin" element={<Patemaillogin />} />
          <Route path="docreg" element={<Docreg />} />
          <Route path="doclogin" element={<Doclogin />} />
          <Route path="docdetails" element={<Docdetails />} />
          <Route path="patientdetails" element={<Patientdetails />} />
          <Route path="addappoint" element={<Addappoint />} />
          <Route path="approvedappointments" element={<Approvedappointments />} />
          <Route path="cancelledappointments" element={<Cancelledappointments />} />
          <Route path="pendingappointments" element={<Pendingappointments />} />
          <Route path="adddiseases" element={<AddDiseases />} />
      </Routes>
    </BrowserRouter>
  );
}