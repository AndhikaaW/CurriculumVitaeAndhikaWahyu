"use client";
import React from 'react';
import { Briefcase, GraduationCap, Clock } from 'lucide-react';

const education = [
  {
    institution: 'Politeknik Negeri Madiun',
    degree: 'D3 Teknologi Informasi',
    period: '2022 - 2025',
    description: 'Fokus pada pengembangan perangkat lunak, kecerdasan buatan, dan rekayasa perangkat lunak. Lulus dengan predikat Cumlaude.',
  },
  {
    institution: 'SMA Negeri 1 Pacitan',
    degree: 'MIPA',
    period: '2019 - 2022',
    description: 'Mempelajari dasar-dasar matematika dan ilmu pengetahuan alam. Aktif dalam berbagai kegiatan ekstrakurikuler.',
  },
];

const experiences = [
  {
    company: 'PT. Marstech Global Madiun',
    role: 'Web Developer (Internship)',
    period: 'Juni 2024 - Des 2024',
    description: 'Mengembangkan aplikasi Website untuk internal perusahaan menggunakan Next Js dan MySql Berkontribusi dalam perancangan UI/UX dan implementasi fitur.',
  },
  {
    company: 'Freelance',
    role: 'Mobile & Web Developer',
    period: '2022 - Sekarang',
    description: 'Mengerjakan berbagai proyek website maupun mobile untuk klien, mulai dari company profile hingga toko online. Menggunakan teknologi seperti Laravel, React, dan Next.js untuk website. Menggunakan Flutter untuk aplikasi mobile.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Tentang Saya</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Saya adalah seorang pengembang perangkat lunak dengan hasrat untuk menciptakan solusi teknologi yang inovatif dan efisien.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-1">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gray-700 flex items-center justify-center text-6xl">
                    <img src="https://media.licdn.com/dms/image/v2/D4D35AQG-rd7WP-2VMQ/profile-framedphoto-shrink_400_400/B4DZbi1LAnIAAc-/0/1747562312026?e=1752829200&v=beta&t=3-xi4qFd03F2DtCsBL6kKeLC2err66_JS5a8XyBgNtY" alt="" className="rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Andhika Wahyu Agustian</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fresh graduate dengan minat tinggi pada pengembangan aplikasi mobile, khususnya menggunakan Flutter. Saya memiliki pengalaman magang sebagai Mobile Developer dan terbiasa bekerja dalam tim. Saya adalah individu yang proaktif, cepat belajar, dan selalu antusias untuk menghadapi tantangan baru di dunia teknologi.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Di luar coding, saya gemar di bidang musik, mengikuti perkembangan startup, dan berkontribusi dalam komunitas open-source.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white flex items-center justify-center gap-4">
            <GraduationCap size={32} className="text-blue-400" />
            Riwayat Pendidikan
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-700 hidden lg:block"></div>
            {education.map((edu, index) => (
              <div key={index} className="mb-12 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div className={`text-center lg:text-right ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                  <p className="text-blue-400">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
                <div className={`bg-gray-800 border border-gray-700 rounded-xl p-6 mt-4 lg:mt-0 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-white flex items-center justify-center gap-4">
            <Briefcase size={32} className="text-purple-400" />
            Pengalaman Kerja
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-700 hidden lg:block"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div className={`text-center lg:text-right ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-purple-400">{exp.role}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
                <div className={`bg-gray-800 border border-gray-700 rounded-xl p-6 mt-4 lg:mt-0 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
