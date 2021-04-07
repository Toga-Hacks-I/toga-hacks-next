import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FocusError from "../utility/FocusError";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
      <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let data = new FormData();

          data.append("Full Name", values.firstName + " " + values.lastName);
          data.append("Email", values.email);
          if (values.phoneNumber)
            data.append("Phone Number", values.phoneNumber);
          data.append(
            "Subject",
            values.subject ? values.subject : "No Subject"
          );
          data.append("Message", values.message);
          //   data.append(
          //     "_cc",
          //     ""
          //   );
          data.append("_replyto", values.email);
          data.append("_subject", "Toga Hacks Contact Form Submission");

          fetch("https://formsubmit.co/ajax/masonwang0025@gmail.com", {
            method: "POST",
            mode: "no-cors",
            body: data,
          });

          resetForm({});
          setSubmitting(false);
          setSubmitted(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <div className="mt-1">
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
                <ErrorMessage
                  className="formik-error text-sm"
                  component="div"
                  name="firstName"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <div className="mt-1">
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
                <ErrorMessage
                  className="formik-error text-sm"
                  component="div"
                  name="lastName"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
                <ErrorMessage
                  className="formik-error text-sm"
                  component="div"
                  name="email"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-900"
                >
                  Phone
                </label>
                <span id="phone-optional" className="text-sm text-gray-500">
                  Optional
                </span>
              </div>
              <div className="mt-1">
                <Field
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  aria-describedby="phone-optional"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <span id="message-max" className="text-sm text-gray-500">
                  Optional
                </span>
              </div>
              <div className="mt-1">
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="off"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <span id="message-max" className="text-sm text-gray-500">
                  Max. 1000 characters
                </span>
              </div>
              <div className="mt-1">
                <Field
                  component="textarea"
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  aria-describedby="message-max"
                />
                <ErrorMessage
                  className="formik-error text-sm"
                  component="div"
                  name="message"
                />
              </div>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
              {submitted ? (
                <button
                  disabled
                  className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto cursor-default"
                >
                  Submitted!
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
            <FocusError />
          </Form>
        )}
      </Formik>
    </div>
  );
}

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "Name too long.")
    .required("First name required."),
  lastName: Yup.string()
    .max(50, "Name too long.")
    .required("Last name required."),
  email: Yup.string().email("Invalid email.").required("Email required."),
  phoneNumber: Yup.string(),
  subject: Yup.string(),
  message: Yup.string()
    .max(1000, "Message must be under 1000 characters")
    .required("Message body cannot be empty."),
});
