import React, { useState } from "react";

const CertificateVerification = () => {
  const [verificationMethod, setVerificationMethod] = useState("code");

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-500 text-white p-6 flex items-center justify-center">
            <svg
              className="h-10 w-10 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
            <h2 className="text-3xl font-bold">Certificate Verification</h2>
          </div>

          {/* Buttons */}
          <div className="p-4 bg-gray-100 flex justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded-lg transition duration-300 flex items-center ${
                verificationMethod === "code"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setVerificationMethod("code")}
            >
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              </svg>
              Verify by Code
            </button>

            <button
              className={`px-4 py-2 rounded-lg transition duration-300 flex items-center ${
                verificationMethod === "email"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setVerificationMethod("email")}
            >
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              </svg>
              Verify by Email
            </button>
          </div>

          {/* Dynamic Form Rendering */}
          <div className="p-8">
            {verificationMethod === "code" ? (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </svg>
                    Enter Certificate Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="e.g. CERT-2024-001"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition duration-300 flex items-center"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      Verify
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Enter the unique certificate code provided on your certificate
                  </p>
                </div>
              </form>
            ) : (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </svg>
                    Enter Your Email
                  </label>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="e.g. example@email.com"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition duration-300 flex items-center"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                      Verify
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Enter your registered email to verify your certificate.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 text-center">
            <div className="flex justify-center items-center space-x-2 text-gray-600">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              </svg>
              <p className="text-sm">
                For any verification issues, please contact our support team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerification;
