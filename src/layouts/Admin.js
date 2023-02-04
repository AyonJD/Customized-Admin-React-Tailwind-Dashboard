import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  console.log('Admin Route')
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/account-details" exact component={Dashboard} />
            <Route path="/dashboard/bank-transfer" exact component={Dashboard} />
            <Route path="/dashboard/cashout" exact component={Tables} />
            <Route path="/dashboard/payment" exact component={Maps} />
            <Route path="/dashboard/deposit" exact component={Settings} />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
