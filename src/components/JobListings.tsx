import { motion } from "framer-motion";

const jobs = [
  {
    title: "Digital Marketing Specialist",
    company: "PT TechSol",
    location: "Jakarta",
    type: "Fulltime",
    remote: true,
    salary: "Rp 8.000.000 - 15.000.000",
    skills: ["SEO", "Google Ads", "Content Marketing"],
    urgent: true,
    posted: "1 hari yang lalu",
  },
  {
    title: "Software Engineer",
    company: "Inovasi Digital",
    location: "Jakarta",
    type: "Fulltime",
    remote: true,
    salary: "Rp 15.000.000 - 30.000.000",
    skills: ["React", "Node.js", "TypeScript"],
    urgent: false,
    posted: "2 hari yang lalu",
  },
  {
    title: "Sales Representative",
    company: "GoRetail",
    location: "Bandung",
    type: "Fulltime",
    remote: true,
    salary: "Rp 7.000.000 - 14.000.000",
    skills: ["B2B Sales", "CRM", "Negotiation"],
    urgent: true,
    posted: "3 hari yang lalu",
  },
  {
    title: "UI/UX Designer",
    company: "CreativeHub",
    location: "Surabaya",
    type: "Contract",
    remote: true,
    salary: "Rp 10.000.000 - 20.000.000",
    skills: ["Figma", "Prototyping", "User Research"],
    urgent: false,
    posted: "5 hari yang lalu",
  },
  {
    title: "Data Analyst",
    company: "DataCore Indonesia",
    location: "Jakarta",
    type: "Fulltime",
    remote: false,
    salary: "Rp 12.000.000 - 22.000.000",
    skills: ["Python", "SQL", "Tableau"],
    urgent: true,
    posted: "1 minggu yang lalu",
  },
  {
    title: "Product Manager",
    company: "StartupNation",
    location: "Yogyakarta",
    type: "Contract",
    remote: true,
    salary: "Rp 18.000.000 - 35.000.000",
    skills: ["Scrum", "Jira", "Roadmapping"],
    urgent: false,
    posted: "1 minggu yang lalu",
  },
];

const JobListings = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Deep Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B3A] via-[#0F2855] to-[#0B1B3A]" />
      
      {/* Glow Orbs untuk efek ambient */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `
          linear-gradient(to right, hsl(220 100% 80% / 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(220 100% 80% / 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px"
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white">
            Lowongan <span className="bg-gradient-to-r from-[#06264F] via-[#2F6BFF] to-[#1C3FAA] bg-clip-text text-transparent">Tersedia</span>
          </h2>
          <p className="text-blue-200/70 text-lg max-w-xl">
            Cari pekerjaan yang sesuai dengan minat & keahlian Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Gradient Glow Effect - Layer 1 (Outer Glow) */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-blue-600/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
              
              {/* Gradient Glow Effect - Layer 2 (Inner Glow) */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              {/* White Card */}
              <div className="relative bg-white rounded-2xl p-7 shadow-xl shadow-black/20 border border-white/50">
                
                {/* Gradient Border Accent (Top) */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="pr-4 flex-1">
                    {/* Gradient Deep Blue Title */}
                    <h3 className="font-heading font-bold text-xl mb-2 bg-gradient-to-r from-[#06264F] via-[#2F6BFF] to-[#1C3FAA] bg-clip-text text-transparent leading-tight">
                      {job.title}
                    </h3>
                    
                    {/* Company & Location */}
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                      <svg className="w-4 h-4 flex-shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{job.company} · {job.location}</span>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.urgent && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white shadow-sm shadow-red-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          Dibutuhkan Segera
                        </span>
                      )}
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
                        Aktif Merekrut
                      </span>
                    </div>

                    {/* Work Type */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-5">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span className="font-medium">{job.type}</span>
                      </div>
                      {job.remote && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Remote
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Skills / Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 mb-5" />

                {/* Footer: Salary & Buttons */}
                <div className="flex items-center justify-between">
                  {/* Salary dengan icon */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-bold text-slate-900 text-lg">{job.salary}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button className="px-5 py-2.5 text-sm font-semibold rounded-xl border-2 border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50 transition-all">
                      Simpan
                    </button>
                    <button className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all">
                      Lamar
                    </button>
                  </div>
                </div>

                {/* Posted Date */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tayang {job.posted}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;