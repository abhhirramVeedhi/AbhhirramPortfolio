import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Bio from "./components/Bio";
import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import Certifications from "./components/Certifications";
import ContactFrom from "./components/ContactFrom";
import Footer from "./components/Footer";
import ResumeSection from "./components/ResumeSection";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        {/* <Bio /> */}
        <Skills />
        {/* <WorkExperience /> */}
        <EducationSection />
        <Certifications />
        <ContactFrom />
        <ResumeSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
