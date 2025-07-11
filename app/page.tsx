"use client";
import React from 'react';
import { Download, Facebook, Instagram, MessageCircle, Linkedin, Plus, Circle } from 'lucide-react';
import {
  SiJavascript,
  SiFigma,
  SiFlutter,
  SiLaravel,
  SiGit,
  SiMysql,
  SiGooglecloud,
  SiKotlin,
  SiCisco,
  SiNextdotjs
} from "react-icons/si";
import { DiFirebase } from 'react-icons/di';

const skills = [
  { icon: <SiJavascript />, name: "JavaScript", color: "bg-yellow-400", textColor: "text-black" },
  { icon: <SiFigma />, name: "Figma", color: "bg-gray-800", textColor: "text-orange-500" },
  { icon: <SiFlutter />, name: "Flutter", color: "bg-blue-500", textColor: "text-white" },
  { icon: <SiLaravel />, name: "Laravel", color: "bg-red-600", textColor: "text-white" },
  { icon: <SiGit />, name: "Git", color: "bg-orange-500", textColor: "text-white" },
  { icon: <SiCisco />, name: "Networking", color: "bg-blue-800", textColor: "text-white" },
  { icon: <SiKotlin />, name: "Kotlin", color: "bg-purple-500", textColor: "text-white" },
  { icon: <SiMysql />, name: "MySQL", color: "bg-blue-700", textColor: "text-white" },
  { icon: <SiGooglecloud />, name: "Cloud Computing", color: "bg-sky-400", textColor: "text-white" },
  { icon: <SiNextdotjs />, name: "NextJS", color: "bg-black", textColor: "text-white" },
  { icon: <DiFirebase />, name: "Firebase", color: "bg-red-500", textColor: "text-white" }
];

const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Merancang antarmuka yang menarik secara visual untuk memberikan pengalaman pengguna yang memuaskan dan mudah digunakan.",
    color: "bg-blue-500"
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Membangun aplikasi mobile yang tidak hanya fungsional tetapi juga enak dipandang, menciptakan pengalaman digital yang menyenangkan bagi pengguna.",
    color: "bg-white bg-opacity-20"
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Mengembangkan website modern dan responsif dengan performa optimal serta kode yang bersih untuk hasil maksimal.",
    color: "bg-green-500"
  }
];

const stats = [
  { value: "03", label: "Tahun Belajar & Pengembangan Diri" },
  { value: "06", label: "Proyek Diselesaikan" },
  { value: "03", label: "Sertifikat & Penghargaan" }
];

const latestProjects = [
  {
    icon: "📋",
    title: "Godong-Menu",
    description: "Aplikasi E-Order berbasis web untuk restoran Godong Menu menggunakan TypeScript.",
    tags: ["TypeScript", "Web App", "Next.js", "Tailwind CSS", "Node.js","MySql"],
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: "🎁",
    title: "XclusiveGift",
    description: "Aplikasi pemesanan buket bunga dengan fitur transaksi dan rekap bulanan.",
    tags: ["flutter","Mobile App", "Web App", "Dart", "Firebase"],
    color: "from-pink-500 to-pink-700"
  },
  {
    icon: "🛡️",
    title: "Saksi",
    description: "Aplikasi pengaduan kekerasan seksual di kampus dengan fitur lacak aduan dan chatting.",
    tags: ["Flutter", "Dart", "Firebase","Mobile App"],
    color: "from-teal-500 to-teal-700"
  }
];


const detailedProjects = [
  {
    icon: "🛠️",
    title: "Aplikasi POS SRM",
    description: "Aplikasi penjualan jasa untuk Bengkel Sri Rejeki Motor dengan fitur transaksi, cetak nota, serta manajemen inventaris secara efisien.",
    color: "bg-green-500"
  },
  {
    icon: "🎁",
    title: "XclusiveGift Mobile App",
    description: "Aplikasi penjualan jasa buket bunga dengan fitur transaksi, pencatatan pelanggan, dan rekapitulasi bulanan penjualan.",
    color: "bg-purple-500"
  },
  {
    icon: "🛡️",
    title: "Saksi (Sistem Aduan Kekerasan Seksual Internal)",
    description: "Aplikasi pengaduan kasus kekerasan seksual di lingkungan kampus dengan fitur kirim pengaduan, pelacakan status, berita informasi, dan fitur chatting.",
    color: "bg-red-500"
  }
];


const whyHireMe = [
  {
    icon: "💼",
    title: "Pekerja Keras",
    description: "Saya adalah pribadi yang terbiasa bekerja dengan tekun dan bertanggung jawab. Saya selalu berusaha menyelesaikan tugas tepat waktu sebaik mungkin.",
    color: "bg-blue-500"
  },
  {
    icon: "💬",
    title: "Komunikatif",
    description: "Saya terbuka untuk berdiskusi dan aktif dalam berkomunikasi dengan rekan tim maupun atasan. Saya percaya komunikasi yang baik dapat memperlancar pekerjaan.",
    color: "bg-purple-500"
  },
  {
    icon: "🏆",
    title: "Kooperatif",
    description: "Saya senang bekerja dalam tim dan siap membantu ketika dibutuhkan. Saya percaya bahwa kolaborasi dapat menghasilkan hasil yang lebih baik.",
    color: "bg-green-500"
  },
  {
    icon: "⚡",
    title: "Teliti",
    description: "Saya cukup memperhatikan detail dalam pekerjaan agar hasilnya sesuai harapan. Meskipun masih belajar, saya selalu berusaha memberikan yang terbaik.",
    color: "bg-yellow-500"
  }
];


const contactInfo = [
  { icon: "📞", title: "Nomor Telepon", value: "+62821-4079-8064" },
  { icon: "✉️", title: "Email", value: "andhikaw61@gmail.com" },
  { icon: "📍", title: "Domisili", value: "Pacitan, Jawa Timur, Indonesia" }
];

const socialLinks = [
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/tiandhika_/", color: "bg-purple-700 hover:bg-purple-600" },
  { icon: <MessageCircle size={20} />, href: "https://wa.me/+6282140709064", color: "bg-green-600 hover:bg-green-500" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/andhikaw/", color: "bg-blue-600 hover:bg-blue-500" }
];

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg text-gray-300">Halo Perkenalkan, Saya</h2>
              <h1 className="text-5xl font-bold leading-tight">
                <span className="text-purple-500">Andhika Wahyu Agustian</span>
              </h1>
              <p className="text-gray-400 text-lg">Mobile Development Enthusiast</p>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              Saya adalah Fresh Graduate yang memiliki ketertarikan besar di bidang pengembangan aplikasi mobile. Saat ini saya fokus mempelajari dan mengembangkan aplikasi menggunakan Flutter dan Firebase. Saya memiliki semangat belajar yang tinggi dan sedang mencari peluang kerja untuk dapat berkembang di industri mobile development.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded flex items-center gap-2 text-base hover:bg-blue-600 transition-colors">
                <Download size={20} />
                Download CV
              </button>
              <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded text-base hover:border-gray-400 transition-colors">
                <a href="/about" className="flex items-center gap-2">
                  Selengkapnya
                </a>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center relative">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 -top-4 -right-4"></div>

              {/* Profile Image Container */}
              <div className="relative z-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-1">
                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center text-6xl">
                    <img src="https://media.licdn.com/dms/image/v2/D4D35AQG-rd7WP-2VMQ/profile-framedphoto-shrink_400_400/B4DZbi1LAnIAAc-/0/1747562312026?e=1752829200&v=beta&t=3-xi4qFd03F2DtCsBL6kKeLC2err66_JS5a8XyBgNtY" alt="" className="rounded-full" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 text-purple-500">
                <Plus size={24} />
              </div>
              <div className="absolute bottom-12 left-8 text-blue-400">
                <Circle size={20} />
              </div>
              <div className="absolute top-1/2 right-12 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Apa yang saya tawarkan?</h2>
        <h1 className="text-4xl font-bold mb-16 text-white">
          Segala Kebutuhan Terkait Pembuatan Aplikasi Mobile<br />maupun Aplikasi Web
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center hover:transform hover:scale-105 hover:bg-purple-500 ease-in-out duration-300 transition-all cursor-pointer">
              <div className={`w-20 h-20 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl`}>
                {service.icon}
              </div>
              <h3 className="text-xl text-white mb-4">{service.title}</h3>
              <p className="text-white leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center hover:bg-purple-500 ease-in-out duration-300 cursor-pointer hover:transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>


      {/* Latest Projects Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Project</h2>
          <p className="text-gray-400 text-lg">
            Here are some of my recent works that showcase my design skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project List Section */}
        <div className="mt-24">
          <div className="flex flex-col gap-6">
            {detailedProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center gap-6 hover:transform hover:scale-105 transition-all cursor-pointer">
                <div className={`w-20 h-20 ${project.color} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12 text-center mt-12">
            <h3 className="text-2xl text-white mb-4">Have any project in mind?</h3>
            <p className="text-gray-400 mb-8 text-base">
              I'm available for freelance projects and would love to work on your next big idea
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-transparent border border-gray-600 text-gray-300 px-6 py-3 rounded-lg text-base hover:border-gray-400 transition-colors">
                <a href="/project" className="flex items-center gap-2">
                  More Projects
                </a>
              </button>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-lg text-base hover:bg-purple-600 transition-colors">
                <a href="https://wa.me/+6282140709064">
                  Hire me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Hire Me Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Why Hire Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyHireMe.map((item, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 text-3xl`}>
                {item.icon}
              </div>
              <h3 className="text-xl text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools and Skills Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Tools and Skills</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative w-20 h-20"
            >
              <div
                className={`w-full h-full ${skill.color} rounded-2xl flex items-center justify-center text-3xl font-bold ${skill.textColor} border border-gray-700 hover:scale-110 transition-all cursor-pointer`}
              >
                {skill.icon}
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 pb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12 text-center relative overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="absolute top-5 right-5 w-24 h-24 border-2 border-gray-700 rounded-full opacity-30"></div>
        </div>
      </div>

      {/* Social Media Footer */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className={`w-10 h-10 ${link.color} rounded flex items-center justify-center text-white transition-colors`}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
