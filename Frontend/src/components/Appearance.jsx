import React from 'react'

export default function AppearanceTab() {
    return (
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-md mb-6">
        <h2 className="text-lg font-medium mb-4">Appearance Settings</h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-medium mb-1">Dark mode</h3>
            <p className="text-sm text-zinc-300">
              Apply a dark theme to reduce eye strain in low-light environments
            </p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              defaultChecked={true}
            />
            <div className="relative w-11 h-6 bg-blue-600 rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300">
              <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full translate-x-5"></div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Font size</h3>
          <div className="flex items-center">
            <span className="text-sm mr-2">A</span>
            <input type="range" className="w-full" />
            <span className="text-lg ml-2">A</span>
          </div>
        </div>
      </div>
    );
  }