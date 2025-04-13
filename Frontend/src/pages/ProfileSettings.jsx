// Main ProfileSettings Component
import { useState } from 'react';
import Sidebar1 from '../components/Sidebar1';
import ProfileTab from '../components/ProfileTab';
import AppearanceTab from '../components/Appearance';
import AccountTab from '../components/AccountTab';
import BillingTab from '../components/BillingTab';

export default function ProfileSettings() {
  // State management
  const [activeTab, setActiveTab] = useState('profile');
  const [showNotification, setShowNotification] = useState(false);
  
  // Handler for saving changes
  const saveChanges = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  // Render appropriate tab content based on activeTab state
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab saveChanges={saveChanges} />;
      case 'appearance':
        return <AppearanceTab />;
      case 'account':
        return <AccountTab />;
      case 'billing':
        return <BillingTab />;
      default:
        return <ProfileTab saveChanges={saveChanges} />;
    }
  };
  
  return (
    <div className="flex h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 h-screen overflow-hidden">
        <div className="h-full max-w-6xl mx-auto p-6">
          <h1 className="text-2xl font-medium mb-6">Settings</h1>          
          <div className="flex gap-8 h-[calc(100vh-100px)]">
            {/* Left Navigation */}
            <Sidebar1 activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Right Content - Scrollable */}
            <div className="flex-1 max-w-3xl overflow-y-auto pr-4">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}