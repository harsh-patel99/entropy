import React, { useState } from "react";
import { Search } from "feather-icons-react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div class="container mx-auto px-3">
      <Header />
      <div className="flex flex-col items-center p-6">
        <div className="flex items-center w-1/2 mb-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <div
                  className={`rounded-full w-10 h-10 flex items-center justify-center ${
                    index <= currentStep
                      ? "bg-emerald-950 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {index + 1}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-300">
                  <div
                    className={`h-full ${
                      index < currentStep ? "bg-emerald-950" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mb-6 text-center">
          <p className="text-lg">Get Started</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" p-8 md:w-1/2">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Enter the name of the institution to get started - it's free, your
            first 179D allocation letter is on us!
          </h1>
          <div className="flex flex-col mb-4 bg-gray-300 p-8 rounded-md">
            <label htmlFor="institution" className="mb-2">
              NAME OF GOVERNMENT ENTITY, UNIVERSITY, OR NON-PROFIT
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                id="institution"
                name="institution"
                className="shadow-sm rounded-md py-2 px-3 text-gray-700 w-full pr-8"
              />
              <Search className="absolute right-3 text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-gray-500 w-full  text-white font-bold py-2 px-4 rounded-md"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
