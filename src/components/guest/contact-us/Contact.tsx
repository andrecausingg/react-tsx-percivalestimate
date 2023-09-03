import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

import { IconContext } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";
import { FaCircleXmark } from "react-icons/fa6";

interface Props {
  onClose: () => void; // Corrected the type of onClose
}

interface ErrorData {
  firstNameErr: string;
  lastNameErr: string;
  emailErr: string;
  contactNumberErr: string;
  messagesErr: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  messages: string;
}

const Contact: React.FC<Props> = ({ onClose }) => {
  // Use curly braces to destructure onClose
  const [errorData, setErrorData] = useState<ErrorData>({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    contactNumberErr: "",
    messagesErr: "",
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    messages: "",
  });

  const [isClickSubmitMessage, setClickSubmitMessage] = useState(false);
  const [isShowMessage, setShowMessage] = useState(false);
  const [isShowErrMessage, setShowErrMessage] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClickSubmitMessage(true);

    // Owner Email
    axios
      .post("http://127.0.0.1:8000/api/send-email-owner", formData)
      .then((response) => {
        const { data } = response;
        if (data.message === "Email sent successfully to owner")
          console.log(data.message);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorDetails = error.response.data.error.details;
          const firstNameError = errorDetails.firstName
            ? errorDetails.firstName[0]
            : "";
          const lastNameError = errorDetails.lastName
            ? errorDetails.lastName[0]
            : "";
          const emailError = errorDetails.email ? errorDetails.email[0] : "";
          const contactNumberError = errorDetails.contactNumber
            ? errorDetails.contactNumber[0]
            : "";
          const messagesError = errorDetails.messages
            ? errorDetails.messages[0]
            : "";
          setErrorData({
            firstNameErr: firstNameError,
            lastNameErr: lastNameError,
            emailErr: emailError,
            contactNumberErr: contactNumberError,
            messagesErr: messagesError,
          });
        } else {
          // Handle other errors here
        }
        setClickSubmitMessage(false);
      });

    // Client Email
    axios
      .post("http://127.0.0.1:8000/api/send-email-client", formData)
      .then((response) => {
        const { data } = response;
        if (data.message === "Sent Successfully on Client Email") {
          console.log(data.message);
        }
        setClickSubmitMessage(false);
        setErrorData({
          firstNameErr: "",
          lastNameErr: "",
          emailErr: "",
          contactNumberErr: "",
          messagesErr: "",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          messages: "",
        });
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
      })
      .catch(() => {
        setShowErrMessage(false);
        // Handle errors
      });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-slate-900 z-[9999999] opacity-80 font-gilroyLight flex flex-col justify-center item-center"></div>

      {/* Container */}
      <div className="flex flex-col justify-center item-center fixed inset-0 z-[99999999]">
        <div className="p-4 lg:p-10 bg-greenClient w-[300px] md:w-[500px] lg:w-[700px] mx-auto max-h-[600px] overflow-y-auto ">
          {/* Title */}
          {/* <div className="text-center mb-16">
            <h1 className="text-[#EC5900] text-3xl mb-4 font-gilroyExtraBold">
              FOR CLARIFICATION
            </h1>
            <p className="text-xl">
              Let's do your construction estimate, the percival way.
            </p>
          </div> */}

          <div
            onClick={handleClose}
            className="flex flex-col items-center mb-6 text-white cursor-pointer"
          >
            <FaCircleXmark />
            <span className="text-small">Close</span>
          </div>

          <form
            onSubmit={handleSubmit} // Attach the submit handler to the form
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="w-full mb-6">
                <label
                  htmlFor="first-name"
                  className="block text-medium font-medium leading-6 text-white"
                >
                  First name
                </label>
                <span className="block text-sm font-small text-red-600">
                  {errorData.firstNameErr}
                </span>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:border-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className="block text-medium font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <span className="block text-sm font-small text-red-600">
                  {errorData.lastNameErr}
                </span>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:border-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-medium font-medium leading-6 text-white"
                >
                  Email
                </label>
                <span className="block text-sm font-small text-red-600">
                  {errorData.emailErr}
                </span>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:border-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="contactNumber"
                  className="block text-medium font-medium leading-6 text-white"
                >
                  Contact Number
                </label>
                <span className="block text-sm font-small text-red-600">
                  {errorData.contactNumberErr}
                </span>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    autoComplete="social Media"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:border-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-medium font-medium leading-6 text-white"
              >
                Message
              </label>
              <span className="block text-sm font-small text-red-600">
                {errorData.messagesErr}
              </span>
              <div className="mt-2">
                <textarea
                  name="messages"
                  id="message"
                  autoComplete="off"
                  value={formData.messages}
                  onChange={handleChange}
                  className="h-36 resize-none block w-full rounded-md border-0 py-2 px-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:border-blue-500 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            {isShowMessage && (
              <div className="text-center mt-6 p-6 text-green-500">
                <span>
                  Email Sent. Please Check your email for the respond!
                </span>
              </div>
            )}

            {isShowErrMessage && (
              <div className="text-center mt-6p-6 text-red-500">
                <span>Something Went Wrong Please try again later!</span>
              </div>
            )}

            <button
              className={`mx-auto flex justify-center transition ease-in-out delay-150 duration-300 rounded-lg bg-[#012C2D] hover:bg-[#EC5900] text-white p-2 text-l font-bold mt-4 ${
                isClickSubmitMessage ? "cursor-wait bg-[#EC5900]" : ""
              }`}
              disabled={isClickSubmitMessage}
            >
              {isClickSubmitMessage && (
                <IconContext.Provider
                  value={{
                    className: "animate-spin h-6 w-6 text-white mr-3",
                  }}
                >
                  <BiLoaderAlt />
                </IconContext.Provider>
              )}

              {isClickSubmitMessage ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
