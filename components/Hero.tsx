import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-5xl font-normal text-white" style={{ fontFamily: "'Josefin Sans', sans-serif", lineHeight: '40px' }}>
        Hi, I'm <span className="text-blue-400">Karthikeya</span> 👋
      </h1>

      <p className="mt-6 text-xl text-gray-300 max-w-2xl" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
        I'm an AI engineering student who builds and deploys real-world
        machine learning systems — from LLM-powered chatbots 🤖 to
        real-time computer vision applications 📸.
      </p>

      <p className="mt-6 text-xl text-gray-300 max-w-2xl" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
        I enjoy turning complex ideas into practical products that people
        actually use ✨.
      </p>

      <p className="text-base text-gray-500 mt-6" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
        🧠 LLMs · 📚 RAG · 👁️ Computer Vision · 🤖 Deep Learning · 🚀 Deployment
      </p>
    </section>
  );
};

export default Hero;