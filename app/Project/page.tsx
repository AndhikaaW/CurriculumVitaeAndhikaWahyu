"use client";
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FoodieHaven',
    description: 'Aplikasi catering berbasis Kotlin untuk mengelola pemesanan makanan dan minuman.',
    tags: ['Java','kotlin', 'Mobile App', 'Android'],
    image: '🍽️',
    liveUrl: 'foodiehaven',
    githubUrl: 'https://github.com/AndhikaaW/FoodieHaven'
  },
  {
    title: 'Godong Menu',
    description: 'Aplikasi Web E-Order untuk restoran Godong Menu, dibangun dengan TypeScript.',
    tags: ['TypeScript', 'Web App', 'Next.js', 'Tailwind CSS', 'Node.js', 'MySql'],
    image: '📋',
    liveUrl: 'Godong-Menu',
    githubUrl: 'https://github.com/AndhikaaW/Godong-Menu',
  },
  {
    title: 'LOS (Loan Origination System)',
    description: 'Aplikasi web Loan Origination System (LOS) dengan antarmuka sederhana untuk pengajuan pinjaman.',
    tags: ['TypeScript','Web App','Next Js', 'Tailwind CSS', 'Node.js', 'MySql'],
    image: '💼',
    liveUrl: 'los',
    githubUrl: 'https://github.com/AndhikaaW/Los',
  },
  {
    title: 'SAKSI (Sistem Aduan Kekerasan Seksual Internal)',
    description: 'Aplikasi pengaduan kekerasan seksual internal kampus dengan fitur pelaporan, pelacakan, dan informasi berita.',
    tags: ['Dart', 'Flutter', 'Kampus', 'Mobile App', 'Firebase', 'Android'],
    image: '🛡️',
    liveUrl: 'Saksi',
    githubUrl: 'https://github.com/AndhikaaW/Saksi',
  },
  {
    title: 'SRM (Sri Rejeki Motor)',
    description: 'Aplikasi POS bengkel untuk mengelola transaksi, nota, dan inventaris.',
    tags: ['POS', 'Dart', 'Flutter', 'Mobile App', 'Firebase', 'Android'],
    image: '🛠️',
    liveUrl: 'SRM',
    githubUrl: 'https://github.com/AndhikaaW/Srm',
  },
  {
    title: 'XclusiveGift',
    description: 'Aplikasi penjualan buket bunga dengan fitur transaksi dan rekap bulanan, dibangun dengan JavaScript.',
    tags: ['JavaScript', 'Web App', 'Dart', 'Firebase', 'Mobile App', 'Flutter','Android'],
    image: '🎁',
    liveUrl: 'XclusiveGift',
    githubUrl: 'https://github.com/AndhikaaW/XclusiveGift',
  },
];



export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Project Saya</h1>
          <p className="text-gray-400 text-lg">
            Koleksi proyek yang telah saya kerjakan, mencakup berbagai Aplikasi Web dan Mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col hover:cursor-pointer"
              onClick={() => window.location.href = '/project/' + project.liveUrl}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-5xl">
                {project.image}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl text-white mb-3 font-semibold">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                  <a 
                    href={project.liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}