import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Easy Registration",
    desc: "Daftar dalam hitungan menit dengan proses yang simpel dan cepat",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Apply for Jobs",
    desc: "Temukan dan lamar pekerjaan yang sesuai dengan keahlian Anda",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Seamless Interviews",
    desc: "Jalani proses interview yang terintegrasi dan mudah",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Hassle-Free Onboarding",
    desc: "Mulai karier baru Anda dengan onboarding yang mulus",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Deep Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
            How Our Application{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Empat langkah mudah untuk memulai perjalanan karier Anda bersama HireLoop
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              animate={activeStep === i ? {
                scale: 1.05,
                y: -12,
                transition: { duration: 0.3 }
              } : {
                scale: 1,
                y: 0
              }}
              className="relative group cursor-pointer"
            >
              {/* Glassmorphism Card */}
              <div className={`
                relative h-full p-8 rounded-2xl
                bg-gradient-to-br from-blue-900/90 to-slate-900/90
                border border-blue-700/50
                backdrop-blur-xl
                shadow-2xl shadow-blue-950/50
                transition-all duration-300
                ${activeStep === i ? 'border-blue-400 shadow-blue-500/30' : 'hover:border-blue-500/70'}
              `}>
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/40">
                  {i + 1}
                </div>

                {/* Icon Container */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-xl"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(210 100% 60%), hsl(190 100% 60%))`,
                    boxShadow: '0 10px 40px -10px hsl(210 100% 60% / 0.5)'
                  }}
                  animate={activeStep === i ? {
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1],
                    transition: { duration: 0.5 }
                  } : {}}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl mb-3 text-white text-center group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed text-center">
                  {step.desc}
                </p>

                {/* Glow Effect on Active */}
                {activeStep === i && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl -z-10 animate-pulse" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;