import React from 'react';
import { siteConfig } from '../data/config';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
      <p className="text-center text-gray-400 mb-8">
        Have a project in mind or want to collaborate? Reach out directly at <span className="text-indigo-400 font-medium">{siteConfig.socials.email}</span> or drop a message below.
      </p>
      
      {/* Web3Forms Free Integration */}
      <form action="https://api.web3forms.com/submit" method="POST" className="space-num bg-gray-900 p-8 rounded-xl border border-gray-800 space-y-4">
        {/* Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms key */}
        <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
          <input type="text" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
          <input type="email" name="email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea name="message" rows="4" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"></textarea>
        </div>

        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition">
          Send Message
        </button>
      </form>
    </section>
  );
};