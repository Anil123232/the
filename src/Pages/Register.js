/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

import Loading, { showLoading } from "../Components/Loading";

import { toast } from "react-toastify";

import Input from "../Components/Input";
import axios from "axios";
import SelectInput from "../Components/Select";

import Button from "../Components/Button";
import { FaUserCircle } from "react-icons/fa";
import { Modal } from "antd";
import { api_url } from "../Library/Library";


const Register = () => {
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      fullname:"",
      gender: null,
      who:"user",
      terms: true,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      username: Yup.string().required("Username is required"),
      fullname: Yup.string().required("Fullname is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
          "Password must contain at least one uppercase letter, one lowercase letter and one number"
        ),
      gender: Yup.string().required("Gender is required"),
      
    }),
    onSubmit: (values) => {
      if (values.terms === false) {
        toast.error("Please accept the terms and conditions to continue", {
          description: "",
          duration: 3000,
        });
      } else {
        showLoading(true);
        axios
          .post(`${api_url}/api/v1/user/signup`, values)
          .then((res) => {
            toast.success("Registered Successfully", {
               duration: 3000,
               });
          })
          .catch((err) => {
            toast.error(
              err.response?.data?.message
                ? err.response?.data?.message
                : "Something went wrong",
              {
                duration: 3000,
              }
            );
          })
          .finally(() => {
            showLoading(false);
          });
      }
    },
  });

  return (
    <>

      <div className="relative flex flex-col justify-center min-h-screen overflow-x-hidden  max-sm:block mb-8 ">
        <div className="w-full p-10 m-auto bg-cardBg rounded-md shadow-xl sm:max-w-xl dark:bg-dark_cardBg border">
          <h1 className="w-full m-auto -ml-1 flex -my-14 justify-center">

          </h1>

          <h3 className="text-sm mt-3 font-semibold text-center text-textSecondary dark:text-dark_textSecondary">
            By signing up, you agree to our
            <br />
            <p
              onClick={showModal}
              className="font-medium text-link_text hover:underline mt-1 cursor-pointer"
            >
              Terms and Conditions
            </p>
          </h3>
          <Modal
        title="Terms and Conditions"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       </Modal>
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <Input
              formik={formik}
              Icon={<MailOutlined />}
              title="Email"
              name="email"
              type="email"
            />
            <Input
              formik={formik}
              Icon={<UserOutlined />}
              title="Username"
              name="username"
              type="text"
            />
             <Input
              formik={formik}
              Icon={<UserOutlined />}
              title="Fullname"
              name="fullname"
              type="text"
            />
            <Input
              formik={formik}
              Icon={<LockOutlined />}
              name="password"
              title="Password"
              type={"text"}
          haveHideView={true}

            />
            <SelectInput
              formik={formik}
              Icon={<FaUserCircle />}
              title="Select an Gender"
              name="gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "others", label: "Others" },
              ]}
              value={formik.values.gender}
            />
            
            <div className="mt-6 w-full justify-center flex">
              <Button
                type="primary"
                text="Register"
                onClick={formik.handleSubmit}
              />
            </div>
          </form>
      

          <p className="mt-8 text-2xs font-light text-center text-textPrimary dark:text-dark_textPrimary">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-link_text hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
