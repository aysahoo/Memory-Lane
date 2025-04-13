import React from 'react';
import { FaUser, FaPalette, FaCog, FaCreditCard } from 'react-icons/fa';

export default function Sidebar1({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'appearance', label: 'Appearance', icon: <FaPalette /> },
    { id: 'account', label: 'Account', icon: <FaCog /> },
    { id: 'billing', label: 'Billing', icon: <FaCreditCard /> }
  ];

  return (
    <div className=" md:w-64 bg-zinc-900 h-screen flex flex-col items-center md:items-start space-y-4 md:space-y-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-3 px-4 py-2 md:px-3 rounded-md text-lg transition-colors w-full ${
            activeTab === tab.id
              ? 'bg-zinc-800 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <div className="flex justify-center items-center">
            {tab.icon}
          </div>
          {/* Show label only on larger screens */}
          <span className="hidden md:block">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
