"use client";

import React from "react";
import Pvtoev from "./pvtoev";
import withAuth from "@/app/common/withAuth";

function PvToEvPage() {
  return (
    <div>
      <Pvtoev />
    </div>
  );
}

export default withAuth(PvToEvPage, { requireAuth: true });
