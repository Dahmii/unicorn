import React, { useState } from "react";
import { Link } from "react-router-dom";

const accounts = {
  NGN: {
    bank: "Guaranty Trust Bank (GTB)",
    accountName: "Uspace Services Limited",
    accountNumber: "0896987033",
    currency: "Naira (NGN)",
  },
  GBP: {
    bank: "Guaranty Trust Bank (GTB)",
    accountName: "USPACE SERVICES LIMITED",
    accountNumber: "0903984907",
    currency: "Pounds (GBP)",
  },
  USD: {
    bank: "GTBank",
    accountName: "Uspace Services Limited",
    accountNumber: "0903984897",
    currency: "Dollar (USD)",
  },
};

const DonatePage: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<
    "NGN" | "GBP" | "USD"
  >("NGN");

  const { bank, accountName, accountNumber, currency } =
    accounts[selectedCurrency];

  return (
    <section className="min-h-screen bg-primary-50 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-custom">
        <h2 className="text-3xl font-bold text-primary-800 mb-6 text-center">
          Make a Contribution
        </h2>

        <p className="text-gray-700 mb-4 text-center">
          Thank you for your interest in supporting our mission. Please select
          your currency to view account details:
        </p>

        {/* Currency Switch Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          {(["NGN", "GBP", "USD"] as const).map((cur) => (
            <button
              key={cur}
              onClick={() => setSelectedCurrency(cur)}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 border ${
                selectedCurrency === cur
                  ? "bg-primary-800 text-white border-primary-800"
                  : "bg-white text-primary-800 border-primary-300 hover:bg-primary-100"
              }`}
            >
              {cur}
            </button>
          ))}
        </div>

        {/* Bank Details */}
        <div className="space-y-4">
          <div className="bg-primary-100 p-4 rounded-md border border-primary-300">
            <h4 className="text-lg font-semibold text-primary-800 mb-1">
              Bank Name
            </h4>
            <p className="text-gray-800">{bank}</p>
          </div>

          <div className="bg-primary-100 p-4 rounded-md border border-primary-300">
            <h4 className="text-lg font-semibold text-primary-800 mb-1">
              Account Name
            </h4>
            <p className="text-gray-800">{accountName}</p>
          </div>

          <div className="bg-primary-100 p-4 rounded-md border border-primary-300">
            <h4 className="text-lg font-semibold text-primary-800 mb-1">
              Account Number
            </h4>
            <p className="text-gray-800">{accountNumber}</p>
          </div>

          <div className="bg-primary-100 p-4 rounded-md border border-primary-300">
            <h4 className="text-lg font-semibold text-primary-800 mb-1">
              Currency
            </h4>
            <p className="text-gray-800">{currency}</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/#get-involved"
            className="inline-block bg-primary-800 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
