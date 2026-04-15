import { motion } from "framer-motion";
import talentPerson from "@/assets/talent-person.png";

const TalentPoolCTA = () => {
  return (
    <section id="talent-pool" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 100% 55% / 0.2), hsl(195 100% 47% / 0.15))" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-glow-cyan/30"
          style={{
            left: `${10 + i * 11}%`,
            bottom: "0",
            animation: `particle ${7 + i}s linear ${i}s infinite`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          {/* Person illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <img
              src={talentPerson}
              alt="Talent sedang mencari pekerjaan"
              loading="lazy"
              width={280}
              height={420}
              className="drop-shadow-2xl float-animation"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Tidak menemukan pekerjaan yang{" "}
              <span className="gradient-text">sesuai?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Gabung Talent Pool dan biarkan recruiter menemukan Anda. Profil Anda akan terlihat oleh ratusan perusahaan partner kami.
            </p>
            <button className="glow-button text-lg glow-pulse">
              🎯 Gabung Talent Pool Sekarang
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentPoolCTA;
