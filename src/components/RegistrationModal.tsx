import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  role: "employer" | "jobseeker";
}

const RegistrationModal = ({ open, onOpenChange, role }: RegistrationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
  });

  const isEmployer = role === "employer";

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to onboarding
    window.open("https://onboarding.hireloop.id", "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-glass-border !bg-card/95 backdrop-blur-2xl max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            {isEmployer ? "Daftar sebagai Employer" : "Daftar sebagai Job Seeker"}
          </DialogTitle>
          <DialogDescription>
            {isEmployer
              ? "Isi data perusahaan Anda untuk mulai merekrut talenta terbaik"
              : "Lengkapi profil Anda untuk menemukan pekerjaan impian"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              {isEmployer ? "Nama PIC" : "Nama Lengkap"}
            </Label>
            <Input
              id="name"
              placeholder={isEmployer ? "Nama penanggung jawab" : "Nama lengkap Anda"}
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="bg-secondary/50 border-border/50 focus:border-glow-blue/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="bg-secondary/50 border-border/50 focus:border-glow-blue/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">No. Telepon</Label>
            <Input
              id="phone"
              placeholder="+62 812 xxxx xxxx"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="bg-secondary/50 border-border/50 focus:border-glow-blue/50"
            />
          </div>

          {isEmployer ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Nama Perusahaan</Label>
                <Input
                  id="company"
                  placeholder="PT Example Indonesia"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-glow-blue/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry" className="text-foreground">Industri</Label>
                <Input
                  id="industry"
                  placeholder="e.g. Technology, Finance"
                  value={formData.industry}
                  onChange={(e) => handleChange("industry", e.target.value)}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-glow-blue/50"
                />
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="position" className="text-foreground">Posisi yang Diinginkan</Label>
              <Input
                id="position"
                placeholder="e.g. Software Engineer, Designer"
                value={formData.position}
                onChange={(e) => handleChange("position", e.target.value)}
                required
                className="bg-secondary/50 border-border/50 focus:border-glow-blue/50"
              />
            </div>
          )}

          <button type="submit" className="glow-button w-full text-base !py-3 mt-4">
            {isEmployer ? "🏢 Daftar sebagai Employer" : "💼 Daftar sebagai Job Seeker"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
