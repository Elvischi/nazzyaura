import React from 'react';
import { User } from "lucide-react";

const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Abuja FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

function MyAccountContent() {
  return (
    <div className="bg-gray-900 p-10 h-auto flex-1">
            <div className="flex items-center gap-4 mb-6">
              <User size={50} />
              <div>
                <h2 className="text-2xl font-semibold">My Account Details</h2>
                <p className="text-gray-400 text-sm">
                  Here you can view and manage your account information.
                </p>
              </div>
            </div>
            <div className="border-b border-yellow-800"></div>

            <form className="flex flex-col gap-4 mt-10">
              {/* First + Last name row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  />
                </div>
              </div>
              {/*phone number + gender*/}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Phone Number"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <select
                    name="gender"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-gray-400 rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  >
                    <option value="" disabled selected hidden>
                      Please choose an option
                    </option>
                    <option className="bg-gray-900 text-white" value="male">
                      Male
                    </option>
                    <option className="bg-gray-900 text-white" value="female">
                      Female
                    </option>
                  </select>
                </div>
              </div>
              {/*country + state*/}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    readOnly
                    name="Nigeria"
                    placeholder="Nigeria"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <select
                    name="state"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-gray-400 rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  >
                    <option value="" disabled selected hidden>
                      State of Residence
                    </option>
                    {nigeriaStates.map((state) => (
                      <option className="bg-gray-900 text-white" value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/*city + address*/}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={(e) => e.preventDefault() }
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #f5d485)",
                }}
                className="w-32 text-black font-semibold py-3 rounded-md mt-2 hover:opacity-90 transition duration-300 tracking-wide"
              >
                Save Account
              </button>
            </form>
          </div>
  );
}

export default MyAccountContent;
