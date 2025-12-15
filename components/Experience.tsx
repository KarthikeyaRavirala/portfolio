import React from 'react';

const Experience = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-gray-400 mb-12 text-2xl font-normal" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>Startups I've worked with</h2>
      <div className="flex gap-16 items-center opacity-80">
        <img src="/next.svg" alt="Next.js" height={40} />
        <img src="/vercel.svg" alt="Vercel" height={40} />
      </div>
    </section>
  );
};

export default Experience;