import React from "react";
import { ArrowUpRight } from "feather-icons-react";

const Services = () => {
  return (
    <>
      <div className="item-center mt-10">
        <h2 className="text-xl font-bold">
          AllocatePro ensures you spend the latest amount of time and money
          securing your allocation letter
        </h2>
      </div>
      <div className="p-6 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-gray-100 p-6 shadow-md">
            <ArrowUpRight className="text-black-500 mb-2" size={24} />
            <h2 className="text-xl font-bold mb-2">Everything in one Place</h2>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <ArrowUpRight className="text-black-500 mb-2" size={24} />

            <h2 className="text-xl font-bold mb-2">
              Full Visibility of status
            </h2>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <ArrowUpRight className="text-black-500 mb-2" size={24} />

            <h2 className="text-xl font-bold mb-2">Ensured Compliance</h2>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
