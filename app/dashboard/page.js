"use client";

import React from "react";
import AppLayout from "../common/appLayout";
import withAuth from "../common/withAuth";
import Dashboard from "./dashboard";

function DashboardPage() {
  return (
    
      <div className="">
        <Dashboard/>
      </div>
    
  );
}

export default  withAuth(DashboardPage, { requireAuth: true });
