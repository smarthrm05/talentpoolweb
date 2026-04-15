import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border/50"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-glow-blue to-glow-cyan flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-sm">H</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Hire<span className="gradient-text">Loop</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">How It Works</a>
          <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Solutions</a>
          <a href="#talent-pool" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Talent Pool</a>
          <a href="#register" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Register</a>
        </div>

        <button className="glow-button text-sm !px-6 !py-2.5">
          Gabung Talent Pool
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
