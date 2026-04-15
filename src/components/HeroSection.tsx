import { motion } from "framer-motion";
import heroDashboard from "@/assets/hero-dashboard.png";

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`glass-card p-4 ${className}`}
    style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Crystal light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-glow-blue/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-glow-cyan/10 blur-[100px]" style={{ animation: "crystalShift 8s ease-in-out infinite" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow-blue/5 blur-[200px]" style={{ animation: "crystalShift 12s ease-in-out 2s infinite" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(220 100% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 100% 60%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background: i % 2 === 0 ? "hsl(220 100% 60% / 0.5)" : "hsl(195 100% 47% / 0.5)",
            left: `${5 + i * 8}%`,
            bottom: "0",
            animation: `particle ${6 + i * 1.5}s linear ${i * 0.8}s infinite`,
          }}
        />
      ))}

      {/* Crystal shards */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shard-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-glow-cyan/20 to-transparent"
          style={{
            height: `${80 + i * 40}px`,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            transform: `rotate(${-30 + i * 15}deg)`,
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-sm text-muted-foreground"
            animate={{ boxShadow: ["0 0 0px hsl(220 100% 60% / 0)", "0 0 20px hsl(220 100% 60% / 0.2)", "0 0 0px hsl(220 100% 60% / 0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" />
            Platform Rekrutmen Modern
          </motion.div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Bangun Talent Pool
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block"
            >
              Berkualitas untuk{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="gradient-text block"
            >
              Masa Depan Rekrutmen
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Platform modern untuk menghubungkan perusahaan dengan talenta terbaik secara efisien
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button className="glow-button text-lg glow-pulse">
              🚀 Gabung Talent Pool
            </button>
          </motion.div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            {[
              { value: "10K+", label: "Talenta Aktif" },
              { value: "500+", label: "Perusahaan" },
              { value: "95%", label: "Tingkat Kepuasan" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
              >
                <div className="font-heading text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Dashboard illustration + floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={heroDashboard} alt="HireLoop Dashboard" className="w-full drop-shadow-2xl" />
          </motion.div>

          {/* Glow behind dashboard */}
          <div className="absolute inset-0 -z-10 blur-[80px] bg-glow-blue/15 rounded-full scale-75" />

          <FloatingCard className="absolute -left-8 top-12 !p-3" delay={0.5}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-glow-blue to-glow-cyan flex items-center justify-center text-primary-foreground text-sm">✓</div>
              <div>
                <div className="text-sm font-semibold text-foreground">Interview Scheduled</div>
                <div className="text-xs text-muted-foreground">Today, 14:00 WIB</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute -right-4 bottom-20 !p-3" delay={1}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-glow-cyan to-glow-blue flex items-center justify-center text-primary-foreground text-sm">🎯</div>
              <div>
                <div className="text-sm font-semibold text-foreground">Match Found</div>
                <div className="text-xs text-muted-foreground">98% compatibility</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute left-1/2 -translate-x-1/2 -bottom-4 !p-3" delay={1.5}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-glow-blue to-accent flex items-center justify-center text-primary-foreground text-sm">📊</div>
              <div>
                <div className="text-sm font-semibold text-foreground">152 Applicants</div>
                <div className="text-xs text-muted-foreground">+23% this week</div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
