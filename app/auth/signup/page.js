"use client";

import withAuth from "@/app/common/withAuth";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

function SignupPage() {
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
    // console.log(values);
    localStorage.setItem("token", "1234");
    login();
    router.push("/auth/login");
  };
  return (
    <div>
      <div className="flex mt-8 rounded-md sm:w-[500px] w-[380px] mx-auto shadow-md bg-white p-6">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ values, setValues, setFieldValue }) => (
            <Form className="w-full">
              <p className="font-semibold text-2xl text-slate-900">
               Create Your Account
              </p>
              <div className="my-4">
                <div>
                  <label className="mb-[25px] font-semibold text-gray-500">
                    Name
                    {/* <span className="text-black">*</span> */}
                  </label>
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      className="my-2 rounded-md border border-solid border-slate-300 w-full p-2"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-[red]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
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
              
              <button
                type="submit"
                className="text-center py-2 bg-blue-700 w-full text-white rounded-md font-semibold hover:shadow-blue-600 shadow-md"
              >
                Create Account
              </button>
              <div className="flex gap-1 py-4">
                <p className="font-semibold">Already a member?</p>
                <p className="font-semibold text-blue-600 cursor-pointer hover:underline">
                  <Link href="/auth/login">Login</Link>
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

export default withAuth(SignupPage, { requireAuth: false });
