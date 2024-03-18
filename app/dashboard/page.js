"use client";

import React from "react";
import AppLayout from "../common/appLayout";
import withAuth from "../common/withAuth";

function DashboardPage() {
  return (
    
      <div className="">
        <p className="py-4 font-bold text-center text-2xl">Dashboard</p>
      </div>
    
  );
}

export default  withAuth(DashboardPage, { requireAuth: true });
