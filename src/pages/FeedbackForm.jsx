import { useFormik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
const FeedbackForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  // TODO ::: Validation Schema

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your full name"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    message: Yup.string().required("Please enter your feedback message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      formik.resetForm();
      setShowSuccess(true);
    },
  });
  return (
    <AnimatePresence>
      <div className="pb-10 pt-10 z-10 px-3 flex justify-center items-center bg-[#ddd]">
        {showSuccess ? (
          <motion.div
            initial={{ opacity: 1, y: -0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="transition-all duration-300 px-24 py-10 bg-white rounded-lg items-center"
          >
            <h2 className="text-3xl text-center text-[#0C134F] mb-4 mt-4">
              Thanks for your feedback! 🌞
            </h2>
            <Link
              to="/"
              className="text-xl underline text-center text-[#0C134F] mb-4 mt-4 duration-300 hover:text-black hover:cursor-pointer"
            >
              Navigate back to home
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-1 w-full items-center">
            <div>
              <motion.div
                initial={{ opacity: 1, y: -160 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-full ease-in-out duration-100 sm:w-[650px] rounded-lg px-12 py-2  bg-white"
              >
                <h2 className="text-3xl text-center py-4 font-bold text-[#0C134F]">
                  Feedback - Your's
                </h2>
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full mb-4">
                    <div className="flex flex-col gap-2 justify-center">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="px-8 mb-4 focus:border-[#0C134F]  duration-100 w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <span className="text-red-500">
                          {formik.errors.name}
                        </span>
                      )}
                    </div>

                    <div className="w-full mb-4">
                      <div className="flex flex-col justify-center">
                        <input
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Email Address"
                          className="focus:border-[#0C134F] duration-100 px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <span className="text-red-500">
                            {formik.errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <div className="duration-100 flex flex-col rounded-lg justify-center">
                        <textarea
                          rows="8"
                          placeholder="Write Feedback"
                          name="message"
                          value={formik.values.message}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          className="focus:border-[#0C134F]  duration-100 px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                          <span className="text-red-500 mt-2">
                            {formik.errors.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full border-2 mt-6 py-2 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-[#0C134F]"
                    >
                      Submit
                    </button>
                    <p className="w-full italic mt-7 mb-1 text-center text-[#0C134F] font-bold">
                      Made with ❤️ by M.Afaq
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 1, y: -160 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 sm:mt-0 sm:h-[550px] max-w-2xl"
            >
              <img
                className="w-full h-full rounded"
                src="https://images.pexels.com/photos/6935076/pexels-photo-6935076.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </motion.div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default FeedbackForm;
