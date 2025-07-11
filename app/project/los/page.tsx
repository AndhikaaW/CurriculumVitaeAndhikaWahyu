"use client";
import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
// import Image from 'next/image';

const projectImages = [
  { src: '/sc1.png', alt: 'Screenshot 1' },
  { src: '/sc2.png', alt: 'Screenshot 2' },
  { src: '/sc3.png', alt: 'Screenshot 3' },
  { src: '/sc4.png', alt: 'Screenshot 4' },
  { src: '/sc5.png', alt: 'Screenshot 5' },
  { src: '/sc6.png', alt: 'Screenshot 6' },
  { src: '/sc7.png', alt: 'Screenshot 7' },
  { src: '/sc8.png', alt: 'Screenshot 8' },
];

export default function LosProjectPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <a href="/project" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </a>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Loan Origination System (LOS)</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Aplikasi web Loan Origination System (LOS) dengan antarmuka sederhana untuk pengajuan pinjaman. Dibangun dengan Next.js, TypeScript, dan Tailwind CSS, aplikasi ini menyediakan fitur pengajuan pinjaman yang mudah digunakan.
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Client</h3>
              <p className="text-gray-400">Internal Company Project</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Role</h3>
              <p className="text-gray-400">Full-Stack Developer</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Year</h3>
              <p className="text-gray-400">2024</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Next.Js</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">TypeScript</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Node.Js</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">MySQL</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((image, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-16">
            <a 
                href="#"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
                <ExternalLink size={20} />
                <span>View Live Demo (if available)</span>
            </a>
        </div> */}

      </div>
    </div>
  );
}
