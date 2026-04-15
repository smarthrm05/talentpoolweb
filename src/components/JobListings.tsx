import { motion } from "framer-motion";

const jobs = [
  {
    title: "Digital Marketing Specialist",
    company: "PT TechSol",
    location: "Jakarta",
    type: "Fulltime",
    workMode: "Hybrid",
    salary: "Rp8jt-15jt",
    skills: ["SEO", "Google Ads", "Content Marketing"],
    urgent: true,
    posted: "1 hari yang lalu",
  },
  {
    title: "Software Engineer",
    company: "Inovasi Digital",
    location: "Jakarta",
    type: "Fulltime",
    workMode: "Remote",
    salary: "Rp15jt-30jt",
    skills: ["React", "Node.js", "TypeScript"],
    urgent: false,
    posted: "2 hari yang lalu",
  },
  {
    title: "UI/UX Designer",
    company: "CreativeHub",
    location: "Surabaya",
    type: "Contract",
    workMode: "On Site",
    salary: "Rp10jt-20jt",
    skills: ["Figma", "Prototyping"],
    urgent: false,
    posted: "5 hari yang lalu",
  },
];

const getCompanyLogo = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=0D2A5C&color=fff&bold=true`;

const JobListings = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#08142E] via-[#0D2A5C] to-[#08142E]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lowongan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tersedia
            </span>
          </h2>

          <p className="text-blue-200/70 max-w-xl mx-auto">
            Cari pekerjaan yang sesuai dengan minat & keahlian Anda
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {jobs.map((job, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="h-full">
              <div className="h-full flex flex-col justify-between rounded-2xl p-6 
              bg-gradient-to-br from-[#0F2A5F] via-[#123879] to-[#0A1F4D]
              border border-white/10 shadow-xl shadow-blue-900/40">

                {/* TOP */}
                <div>

                  {/* TITLE + SALARY */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-white font-bold text-lg truncate whitespace-nowrap overflow-hidden pr-2">
                      {job.title}
                    </h3>

                    <span className="text-cyan-400 text-sm font-semibold whitespace-nowrap">
                      {job.salary}
                    </span>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tag">{job.type}</span>
                    <span className="tag">1–3 tahun</span>
                    <span className="tag">Minimal S1</span>

                    {job.skills.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className="tag">
                        {skill}
                      </span>
                    ))}

                    {job.skills.length > 2 && (
                      <span className="tag">
                        +{job.skills.length - 2}
                      </span>
                    )}
                  </div>

                  {/* COMPANY + LOCATION */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 rounded-lg overflow-hidden border border-white/10">
                      <img
                        src={getCompanyLogo(job.company)}
                        alt={job.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col text-sm">
                      <span className="text-blue-200 font-medium">
                        {job.company}
                      </span>

                      <div className="flex items-center gap-1.5 text-blue-200/70">
                        <svg
                          className="w-3.5 h-3.5 text-blue-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* STATUS BADGE + WORK MODE */}
                  <div className="flex flex-wrap gap-2 mb-4">

                    {job.urgent && (
                      <span className="px-3 py-1 text-xs rounded-full bg-red-500 text-white">
                        Dibutuhkan Segera
                      </span>
                    )}

                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white">
                      Aktif Merekrut
                    </span>

                    {job.workMode && (
                      <span
                        className={`px-3 py-1 text-xs rounded-full text-white ${
                          job.workMode === "Remote"
                            ? "bg-blue-500"
                            : job.workMode === "Hybrid"
                            ? "bg-purple-500"
                            : "bg-slate-500"
                        }`}
                      >
                        {job.workMode}
                      </span>
                    )}

                  </div>

                </div>

                {/* BOTTOM */}
                <div>
                  <div className="h-px bg-white/10 mb-3" />

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-emerald-400 font-medium">
                      {job.posted}
                    </span>

                    <svg
                      className="w-4 h-4 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
                      />
                    </svg>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TAG STYLE */}
      <style jsx>{`
        .tag {
          padding: 4px 10px;
          font-size: 12px;
          border-radius: 6px;
          background: rgba(255,255,255,0.1);
          color: #c7d2fe;
        }
      `}</style>
    </section>
  );
};

export default JobListings;