import React from "react";
import { User, ShoppingBag, Clock, LogOut } from "lucide-react";
import { useState } from "react";
import MyAccountContent from "./accountdetails";
import MyOrders from "./orders";
import Home from "../pages/home.jsx"; 
import { useNavigate } from "react-router-dom";



const menuItems = [
  {
    label: "My Account",
    active: true,
    icon: <User size={20} />,
  },
  {
    label: "My Orders",
    active: true,
    icon: <ShoppingBag size={20} />,
  },
  {
    label: "My Pending Orders",
    active: true,
    icon: <Clock size={20} />,
  },
  {
    label: "Logout",
    logout: true,
    icon: <LogOut size={20} />,
  },
];




function AccountDetails() {
  const [openMenu, setOpenMenu] = useState("My Account");
  const navigate = useNavigate();
  
  return (
    <>
      <div className="bg-gray-950 text-white min-h-screen">
        <h1
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="tracking-wide text-yellow-600 text-4xl font-bold text-center py-10"
        >
          Welcome to your Dashboard!
        </h1>
        <div className="flex flex-col lg:flex-row">
          {/*left side - menu*/}
          <div className=" border-b-2 lg:border-b-0 lg:border-r-2 border-yellow-400 rounded-sm overflow-x-auto lg:overflow-hidden w-full lg:w-96 flex flex-row lg:flex-col">
            {menuItems.map((item, i) => (
              <div
                key={item.label}
                onClick={() => {
                  if (item.logout) {
                    navigate("/login");
                  } else {
                    setOpenMenu(item.label);
                  }
                }}
                className={[
                  "flex items-center gap-4 px-7 py-4 cursor-pointer transition-colors",
                  openMenu === item.label
                    ? "bg-gray-900"
                    : "bg-gray-950 hover:bg-gray-900",
                  item.logout
                    ? "text-red-500"
                    : openMenu === item.label
                      ? "text-white"
                      : "text-gray-300",
                  i < menuItems.length - 1 ? "border-b border-gray-800" : "",
                ].join(" ")}
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="text-base font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
          {/*right side - content*/}
          <div className="bg-gray-900 rounded-lg p-6 h-screen flex-1 overflow-y-auto">
            {openMenu === "My Account" && <MyAccountContent />}
            {openMenu === "My Orders" && <MyOrders />}
            {/* {openMenu === "My Pending Orders" && <MyPendingOrdersContent />} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountDetails;