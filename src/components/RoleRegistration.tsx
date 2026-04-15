import { useState } from "react";
import { motion } from "framer-motion";
import RegistrationModal from "./RegistrationModal";

// Images
const employerImg =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80";
const talentImg =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";

// 🏙️ City PNG + fallback
const cityImg =
  "https://www.pngall.com/wp-content/uploads/5/City-Skyline-PNG-Image-HD.png";

const fallbackCity =
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=80";

const roles = [
  {
    label: "#Perusahaan",
    title: "Rekrut Lebih Cerdas. Tumbuh Lebih Cepat.",
    desc: "Temukan kandidat terbaik yang telah terverifikasi di berbagai bidang baik untuk posisi tetap, kontrak, maupun berbasis proyek.",
    cta: "Mulai Sekarang",
    role: "employer" as const,
    bgGradient: "from-[#020617] via-[#1e3a8a] to-[#020617]",
    image: employerImg,
  },
  {
    label: "#Pekerja",
    title: "Temukan Pekerjaan. Lebih Cepat.",
    desc: "Jelajahi peluang kerja terkurasi yang sesuai dengan keahlian dan tujuan Anda di berbagai industri dan tingkat pengalaman.",
    cta: "Gabung Talent Pool",
    role: "jobseeker" as const,
    bgGradient: "from-[#020617] via-[#1e3a8a] to-[#020617]",
    image: talentImg,
  },
];

const RoleRegistration = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    "employer" | "jobseeker"
  >("employer");

  const handleOpen = (role: "employer" | "jobseeker") => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-slate-100">

      {/* 🌃 CITY BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img
          src={cityImg}
          alt="city"
          onError={(e) => {
            e.currentTarget.src = fallbackCity;
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
                     w-[1100px] max-w-none blur-[0.5px]"
        />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-blue-500/20 blur-3xl opacity-70" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-cyan-400/20 blur-2xl opacity-60" />

        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Mulai Perjalanan Anda{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Sekarang
            </span>
          </h2>

          <p className="text-slate-600 text-lg">
            Pilih peran yang sesuai dengan tujuan Anda
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roles.map((role, i) => {
            const [first, second] = role.title.split(". ");

            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/30"
                onClick={() => handleOpen(role.role)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.bgGradient}`} />

                <motion.div
                  className="absolute inset-0 opacity-[0.12]"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 30%, rgba(59,130,246,0.15), transparent 40%),
                      radial-gradient(circle at 80% 70%, rgba(37,99,235,0.15), transparent 40%)
                    `,
                    backgroundSize: "150% 150%",
                  }}
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 rounded-3xl border border-white/15 pointer-events-none" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 pointer-events-none" />

                <div className="relative p-10 md:p-12 min-h-[550px] flex flex-col">
                  <span className="text-sm font-semibold tracking-wider mb-6 text-slate-300">
                    {role.label}
                  </span>

                  {/* ✅ FIX TITLE */}
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white leading-[1.1]">
                    {first}.
                    <br />
                    <span className="whitespace-nowrap bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                      {second}
                    </span>
                  </h3>

                  <p className="text-base mb-8 leading-relaxed text-slate-200">
                    {role.desc}
                  </p>

                  {/* ✅ FIX BUTTON */}
                  <div className="mt-auto mb-10">
                    <button className="px-8 py-4 rounded-xl font-semibold text-lg 
                                       bg-gradient-to-r from-blue-500 to-cyan-400 
                                       text-white 
                                       hover:opacity-90 
                                       transition-all duration-300 
                                       hover:scale-105 
                                       shadow-lg shadow-blue-500/30">
                      {role.cta}
                    </button>
                  </div>

                  <div className="mt-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-blue-500/20 z-10" />
                      <img
                        src={role.image}
                        alt={role.title}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${role.bgGradient} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <RegistrationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        role={selectedRole}
      />
    </section>
  );
};

export default RoleRegistration;