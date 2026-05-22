import React from 'react';

function ContactPage() {
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
        <h2 className="text-5xl font-bold text-white mb-6 tracking-wider">Get In Touch</h2>
        <div className="space-y-6 text-cyan-100 text-lg">
          <p className="leading-relaxed">
            I'm always excited to collaborate on interesting projects or discuss new opportunities. Feel free to reach out!
          </p>
          <div className="space-y-4 mt-8">
            <a
              href="mailto:adithya.r@example.com"
              className="block text-cyan-300 hover:text-cyan-100 transition-colors text-xl"
            >
              ✉️ adithya.r@example.com
            </a>
            <p className="text-cyan-300 text-xl">📍 Based in Your Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;