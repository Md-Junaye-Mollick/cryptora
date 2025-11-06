import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../components/layouts/main-layout";
import LandingPage from "../pages/landing-page";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesPage;