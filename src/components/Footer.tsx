import { motion } from "framer-motion";

const socialLinks = [
  { name: "Facebook", 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ), 
    url: "#" },
    { 
    name: "Instagram", 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ), 
    url: "#" 
  },
  { name: "Youtube", 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ), 
    url: "#" },
  { name: "LinkedIn", icon: "in", url: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">

      {/* Background Footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950" />

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        
        {/* CTA Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Layout Flex: Heading Kiri, Button Kanan (Sejajar Vertikal) */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              
              {/* Heading */}
              <div className="flex-1">
                <h2 className="font-heading font-bold leading-tight">
                  <span className="block text-white text-6xl md:text-7xl tracking-tight">
                    Let's Discuss Your,
                  </span>
                  <span className="
                    block mt-3 md:mt-4
                    text-3xl md:text-5xl
                    bg-gradient-to-r from-[#ffff] via-[#1e3a8a] to-[#020617]
                    bg-clip-text text-transparent
                  ">
                    Workforce Strategy
                  </span>
                </h2>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                
                {/* Button 1: Talk to Our Team (Hitam Pekat) */}
                <button className="group px-8 py-4 rounded-full border-2 border-white/50 bg-black text-white font-semibold text-lg hover:border-white hover:bg-gray-900 transition-all duration-300 flex items-center gap-2">
                  Talk to Our Team
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
                
                {/* Button 2: Join Careers (Hitam Pekat) */}
                <button className="group px-8 py-4 rounded-full border-2 border-white/50 bg-black text-white font-semibold text-lg hover:border-white hover:bg-gray-900 transition-all duration-300 flex items-center gap-2">
                  Join Hireloop Careers
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>

              </div>

            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Follow Us */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
            Follow us on
          </h3>

          <div className="flex flex-wrap gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all">
                  <span className="text-lg">{social.icon}</span>
                </div>
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="font-heading font-bold text-white text-sm">H</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Hire<span className="text-cyan-400">Loop</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Platform talent pool modern untuk menemukan dan merekrut kandidat terbaik sesuai kriteria.
            </p>
          </div>

          {/* Employer */}
          <div>
            <h4 className="font-semibold text-white mb-4">Employer</h4>
            <ul className="space-y-3">
              {["Lowongan Kerja", "Cari Kandidat", "Talent Pool"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Seeker */}
          <div>
            <h4 className="font-semibold text-white mb-4">Job Seeker</h4>
            <ul className="space-y-3">
              {["Lihat Lowongan", "Gabung Talent Pool", "Panduan"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3 text-sm text-slate-400 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors">+62 812-3456-7890</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-sm text-slate-400 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors">hello@hireloop.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-slate-400 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors">Jakarta, Indonesia</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 HireLoop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition">Privacy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;