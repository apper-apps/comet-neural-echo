import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/organisms/Layout";
import LoginPage from "@/components/pages/LoginPage";
import Feed from "@/components/pages/Feed";
import PostDetail from "@/components/pages/PostDetail";
import TriggersPage from "@/components/pages/TriggersPage";
import SynchronicityPage from "@/components/pages/SynchronicityPage";
import FortuneCookiePage from "@/components/pages/FortuneCookiePage";
import TarotPage from "@/components/pages/TarotPage";
import TestingDetailsPage from "@/components/pages/TestingDetailsPage";
import ResultsPage from "@/components/pages/ResultsPage";
import PricingPage from "@/components/pages/PricingPage";
import SettingsPage from "@/components/pages/SettingsPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/triggers" element={<TriggersPage />} />
          <Route path="/synchronicity" element={<SynchronicityPage />} />
          <Route path="/fortune" element={<FortuneCookiePage />} />
          <Route path="/tarot" element={<TarotPage />} />
          <Route path="/testing-details" element={<TestingDetailsPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </BrowserRouter>
  );
};

export default App;