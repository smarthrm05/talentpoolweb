import { motion } from "framer-motion";

const industries = [
  "IT & Technology",
  "Logistics & Supply Chain",
  "Retail & E-Commerce",
  "Healthcare & Pharma",
  "Manufacturing",
  "Finance & Banking",
  "Hospitality & F&B",
  "Marketing & Creative",
];

const RecruitmentSolutions = () => {
  return (
    <section id="solutions" className="py-28 bg-white relative overflow-hidden">
      
      {/* SOFT BLUE GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 blur-[120px] rounded-full opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Recruitment Solutions for{" "}
              <span className="bg-gradient-to-r from-[#06264F] via-[#2F6BFF] to-[#1C3FAA] bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              HireLoop menyediakan solusi rekrutmen yang disesuaikan untuk berbagai sektor industri, memastikan Anda mendapatkan talenta yang tepat.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25, delay: 0.05 * i }}
                className="
                  relative group overflow-hidden
                  flex items-center gap-3 py-4 px-5 rounded-xl cursor-pointer
                  border border-gray-200 bg-white
                  transition-all
                  hover:shadow-[0_15px_40px_rgba(6,38,79,0.25)]
                "
              >
                {/* 🔥 GRADIENT OVERLAY */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-[#06264F] via-[#0A3A7A] to-[#1C3FAA]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                " />

                {/* CONTENT */}
                <div className="relative z-10 flex items-center gap-3">

                  {/* DOT */}
                  <span className="
                    w-2 h-2 rounded-full 
                    bg-gradient-to-r from-blue-500 to-cyan-400
                    group-hover:bg-white
                    group-hover:scale-125
                    transition-all
                  " />

                  {/* TEXT */}
                  <span className="
                    text-sm font-medium text-gray-700
                    group-hover:text-white
                    transition-colors
                  ">
                    {industry}
                  </span>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RecruitmentSolutions;