"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import withAuth from "@/app/common/withAuth";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  

  const onSuccess = (res) => {
    console.log(res);
    // setLoading(true);

    // const data = {
    //   credential: res.credential,
    // };

    // signinGoogle(token, data)
    //   .then((response) => {
    //     setResponse(response.data);
    //     setLoading(false);
    //     setError(null);
    //     dispatch(login(response.data));
    //     router.push("/");
    //   })
    //   .catch((error) => {
    //     setError(error.response.data.message);
    //     setLoading(false);
    //     setResponse(null);
    //   });
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    localStorage.setItem("token","1234")
    router.push("/dashboard");
  };
  return (
    <div>
      <div className="flex mt-8 rounded-md sm:w-[500px] w-[380px] mx-auto shadow-md bg-white p-8">
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ values, setValues, setFieldValue }) => (
            <Form className="w-full">
              <p className="font-bold text-2xl text-slate-900">
                Sign in to our platform
              </p>
              <div className="my-4">
                <div>
                  <label className="mb-[25px] font-semibold text-gray-500">
                    Email
                    {/* <span className="text-black">*</span> */}
                  </label>
                  <div>
                    <Field
                      type="text"
                      name="email"
                      placeholder="name@example.com"
                      className="my-2 rounded-md border border-solid border-slate-300 w-full p-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[red]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <label className="mb-[25px] font-semibold text-gray-500">
                    Password
                    {/* <span className="text-black">*</span> */}
                  </label>
                  <div>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="********"
                      className="my-2 rounded-md border border-solid border-slate-300 w-full p-2"
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <ErrorMessage
                          name="password"
                          component="p"
                          className="text-[red]"
                        />
                      </div>
                      <p
                        className=" text-xs hover:underline cursor-pointer text-blue-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {" "}
                        {showPassword ? "Hide" : "Show"}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="remember"
                      className="rounded-md border border-solid border-slate-300 h-4 w-4"
                    />
                    <p className="font-semibold text-gray-500">Remeber me</p>
                  </div>
                  <ErrorMessage
                    name="remember"
                    component="p"
                    className="text-[red]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-center py-2 bg-blue-700 w-full text-white rounded-md font-semibold hover:shadow-blue-600 shadow-md"
              >
                Login to your account
              </button>
              <div className="flex gap-1 py-4">
                <p className="font-semibold">Not registered?</p>
                <p className="font-semibold text-blue-600 cursor-pointer hover:underline">
                  <Link href="/auth/signup">Create Account</Link>
                </p>
              </div>
              <div className="w-1/2 pb-4">
                <GoogleOAuthProvider clientId={"4454456"}>
                  <GoogleLogin onSuccess={onSuccess} />
                </GoogleOAuthProvider>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default  withAuth(LoginPage, { requireAuth: false });;
