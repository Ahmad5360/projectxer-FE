"use-client";

import { Form, Formik } from "formik";
import React from "react";

function LoginPage() {
  return (
    <div>
      <div className="flex mt-8 rounded-md w-[600px] mx-auto shadow-md bg-white p-6">
        <Formik>
          <Form>
            <p className="font-bold text-xl">Sign in to our platform</p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LoginPage;
