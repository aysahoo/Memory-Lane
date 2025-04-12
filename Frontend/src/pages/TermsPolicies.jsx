import React from 'react';
import { Link } from 'react-router-dom';

const TermsPolicies = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-sm leading-relaxed">
      <Link
        to={-1}
        className="mb-4 text-[#459ddc] text-lg"
      >
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">Terms of Use & Privacy Policy</h1>

      {/* Terms of Use */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">📄 Terms of Use</h2>
        <p className="text-xs text-gray-500 mb-4">Last Updated: April 11, 2025</p>

        <p>
          Welcome to <strong>Memory Lane</strong>! These Terms of Use (“Terms”) govern your use of our platform and related services (collectively, the “Service”) operated by [Your Company Name] (“we”, “our”, or “us”). By accessing or using Memory Lane, you agree to be bound by these Terms.
        </p>

        <h3 className="font-medium mt-4 mb-1">1. Eligibility</h3>
        <p>You must be at least 13 years old to use the Service. If you are under 18, you must have parental or guardian permission.</p>

        <h3 className="font-medium mt-4 mb-1">2. Your Account</h3>
        <p>You are responsible for maintaining the confidentiality of your login credentials and for any activity under your account.</p>

        <h3 className="font-medium mt-4 mb-1">3. Use of the Service</h3>
        <ul className="list-disc ml-5">
          <li>Upload audio only if you own it or have permission to use it.</li>
          <li>Don’t use the platform to harass, threaten, or harm others.</li>
          <li>Do not reverse-engineer or misuse the technology.</li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">4. Audio Content</h3>
        <p>By uploading audio files, you grant us a limited license to process and analyze the content solely to provide our services. You retain full ownership.</p>

        <h3 className="font-medium mt-4 mb-1">5. Termination</h3>
        <p>We may suspend or terminate access for violations or for operational reasons like maintenance or updates.</p>

        <h3 className="font-medium mt-4 mb-1">6. Modifications</h3>
        <p>We may update these Terms at any time.</p>
        <h2 className="text-xl font-semibold mb-2">🔐 Privacy Policy</h2>
        <p className="text-xs text-gray-500 mb-4">Last Updated: April 11, 2025</p>

        <p>This policy explains how we collect, use, and protect your information on Memory Lane.</p>

        <h3 className="font-medium mt-4 mb-1">1. Information We Collect</h3>
        <ul className="list-disc ml-5">
          <li><strong>Account Info</strong>: name, email, and password.</li>
          <li><strong>Audio Files</strong>: everything you upload.</li>
          <li><strong>Usage Data</strong>: device details, logs, and interactions.</li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">2. How We Use Your Information</h3>
        <ul className="list-disc ml-5">
          <li>To deliver and improve the service.</li>
          <li>To respond to your questions.</li>
          <li>To create snippets and answers from audio.</li>
          <li>To communicate with you (e.g., updates).</li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">3. Data Security</h3>
        <p>We use encryption and secure storage. However, no system is 100% safe.</p>

        <h3 className="font-medium mt-4 mb-1">4. Sharing Your Information</h3>
        <p>We don’t sell or share data except:</p>
        <ul className="list-disc ml-5">
          <li>When required by law.</li>
          <li>With trusted service providers (e.g., cloud services).</li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">5. Your Rights</h3>
        <ul className="list-disc ml-5">
          <li>Access, edit, or delete your data.</li>
          <li>Request your audio files.</li>
          <li>Delete your account anytime.</li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">6. Cookies</h3>
        <p>We may use cookies for better experience. You can disable them in your browser.</p>

        <h3 className="font-medium mt-4 mb-1">7. Third-Party Services</h3>
        <p>Third-party logins (like Google) follow their own policies.</p>

        <h3 className="font-medium mt-4 mb-1">8. Changes to Policy</h3>
        <p>We’ll notify you of major changes to this policy via email or in-app.</p>

        <h3 className="font-medium mt-4 mb-1">9. Contact</h3>
        <p>Questions? Reach us at <a className="underline text-[#459ddc]" href="mailto:ayushankit1630@gmail.com">support@memorylane.com</a>.</p>
      </section>
    </div>
  );
};

export default TermsPolicies;
