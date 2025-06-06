import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SmartPos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 mb-24 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="space-y-10 p-4">
            <h2 className="text-3xl lg:text-5xl font-bold text2">
              A920 Android SmartPOS
            </h2>
            <p className="text-gray-600 text-xl">
              The revolutionary terminal that started it all. The A920 combines
              the full features of an Android tablet with a powerful POS payment
              terminal, all in a sleek and compact design.
            </p>
            <Link to="/contact">
              <button className="btn1 mt-12">Get Started</button>
            </Link>
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl md:mx-auto lg:mx-0"
              src="/images/PED_PAX_3-4_BB_gzxui4.webp"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="my-24">
        <div className="bg1 mt-24 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 px-2 lg:px-0">
              <div>
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src="/images/Home-Graphic-12 (1).png"
                  alt=""
                />
              </div>
              <div className="text-center md:text-start lg:space-y-20">
                <h2 className="text-2xl lg:text-4xl font-bold text-white">
                  Connect your business to a cashless world.
                </h2>
                <p className="text-xl lg:text-2xl text-white mt-6">
                  Sign up now to elevate your business and provide your
                  customers with frictionless, borderless payment experiences
                  using our debit & credit card payment processing services.
                </p>
                <Link to="/contact">
                  <button className="btn1 border-white border-2 w-60 mt-10 lg:mt-20">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartPos;
