import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import RecruitmentSolutions from "@/components/RecruitmentSolutions";
import JobListings from "@/components/JobListings";
import TalentPoolCTA from "@/components/TalentPoolCTA";
import RoleRegistration from "@/components/RoleRegistration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <RecruitmentSolutions />
      <JobListings />
      <TalentPoolCTA />
      <RoleRegistration />
      <Footer />
    </div>
  );
};

export default Index;
