import React from 'react';

export default function UsageStats() {
  const stats = [
    { value: '143', label: 'Conversations' },
    { value: '1,872', label: 'Messages' },
    { value: '42', label: 'Artifacts' }
  ];

  return (
    <div className="p-4 sm:p-6 bg-zinc-900 border border-zinc-800 rounded-md mb-6">
      <h2 className="text-lg font-medium mb-2">Usage Stats</h2>
      <p className="text-sm text-zinc-300 mb-4">Here is an overview of your usage statistics:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-zinc-800 p-4 rounded">
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
            <p className="text-xs text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
