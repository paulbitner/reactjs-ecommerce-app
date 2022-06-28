import React from "react";
import { Outlet } from "react-router";
import AnnouncementBar from "components/AnnouncementBar";
import SiteHeaderMain from "components/SiteHeaderMain";
import UtilityBar from "components/UtilityBar";
import Footer from 'components/Layout/Footer'

const MainLayout = () => {
  return (
    <>
      <header>
        <AnnouncementBar announcement="FREE Shipping on purchases $35+ and subscriptions!" />
        <UtilityBar />
        <SiteHeaderMain />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
