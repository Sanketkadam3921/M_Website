import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageLayout from "../components/common/PageLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import BookAppointment from "../pages/Appointment/BookAppointment";

import Spine from "../pages/Treatments/Spine";
import GIT from "../pages/Treatments/GIT";
import Cosmetology from "../pages/Treatments/Cosmetology";

import PaymentSuccess from "../pages/Payments/PaymentSuccess";
import PaymentFail from "../pages/Payments/PaymentFail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          {/* Main routes inside layout */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<BookAppointment />} />

          {/* Treatments Nested Routes */}
          <Route path="/treatments">
            <Route path="spine" element={<Spine />} />
            <Route path="git" element={<GIT />} />
            <Route path="cosmetology" element={<Cosmetology />} />
          </Route>

          {/* Payment Pages */}
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/fail" element={<PaymentFail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
